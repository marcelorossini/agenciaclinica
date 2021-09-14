// NextJS
import { useState, useEffect, useRef } from 'react'

// API
import api from '../../../services/api'
import axios from 'axios'

// Helpers
import { alertDialog } from '../../Helpers/Alert'
import Dropzone from 'react-dropzone'

// Styles
import Loading from '../../Helpers/Loading'
import {
  DragAndDropZone,
  DrapAndDrop,
  DrapAndDropWrapper,
  FilesList,
  UploadIcon,
  ButtonCancel,
  CloseIcon,
  ProgressBar,
  CheckIcon
} from './style'

let filesList = []
const DragAndDropUploader = props => {
  const { callbackUploadSuccess } = props
  const [stateFilesList, setStateFilesList] = useState([])

  const updateState = (filename, dataParam) => {
    filesList = stateFilesList.filter(item => item.file.name !== filename)
    filesList = [...stateFilesList, dataParam]
    setStateFilesList(filesList)
  }

  const handleUploadProcess = acceptedFiles => {
    const files = acceptedFiles.map(item => ({
      file: item,
      status: 'not_started',
      progress: null
    }))

    files.map(async (item, index) => {
      // Nome do arquivo
      const filename = item.file.name

      // Token de cancelamentodo axios
      const handleAxiosCancelToken = axios.CancelToken.source()

      // Atualiza estado para em envio
      item = { ...item, status: 'started', progress: 1, handleAxiosCancelToken }
      updateState(item.file.name, item)

      // Aguarda 5 segundos para enviar (o usuário pode ter escolhido arquivo "errado")

      // Verifica se usuário cancelou
      if (filesList.filter(item => item.file.name === filename && item.status === 'cancelled').length === 1) return

      // Cria form data com o arquivo a ser enviado
      const formData = new FormData()
      formData.append('file', item.file)

      // Envia para o backend
      try {
        const response = await api.post('upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          cancelToken: handleAxiosCancelToken.token,
          onUploadProgress: progressEvent => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            //
            // Necessário por quando chega em 100% ainda demora um pouco para retornar
            percentCompleted = percentCompleted < 1 ? 1 : percentCompleted
            percentCompleted = percentCompleted === 100 ? 97 : percentCompleted

            // Atualiza state
            item = {
              ...item,
              status: 'in_progress',
              progress: percentCompleted
            }
            updateState(filename, item)
          },
          timeout: 600000
        })

        // Atualiza
        item = { ...item, status: 'ok', progress: 100 }
        updateState(filename, item)
        // Chama a props se existir
        if (callbackUploadSuccess) callbackUploadSuccess(response.data)
      } catch (error) {
        item = { ...item, error: 'error', progress: 0 }
        updateState(filename, item)
      }
    })
  }

  const handleCancelProcess = filename => {
    filesList = filesList.map(item => {
      if (item.file.name === filename) {
        // Se o envio já iniciou cancela o token do axios
        if (item.status === 'in_progress') item.handleAxiosCancelToken.cancel()

        // Muda o status para cancelado
        item.status = 'cancelled'
      }
      return item
    })
    setStateFilesList(filesList)
  }

  return (
    <Dropzone onDrop={acceptedFiles => handleUploadProcess(acceptedFiles)} multiple>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <DragAndDropZone isDragActive={isDragActive} stateFilesListSize={stateFilesList.length}>
          <DrapAndDrop {...getRootProps()}>
            <input {...getInputProps()} />
            <DrapAndDropWrapper>
              <UploadIcon />
              <p>Arraste o(s) arquivo(s) ou clique para selecionar</p>
            </DrapAndDropWrapper>
          </DrapAndDrop>
          <FilesList>
            {stateFilesList
              .filter(item => item.status !== 'cancelled')
              .map((item, index) => (
                <li key={index}>
                  <span>{item.file.name}</span>
                  {item.progress !== 100 ? (
                    <ButtonCancel onClick={() => handleCancelProcess(item.file.name)}>
                      <CloseIcon />
                    </ButtonCancel>
                  ) : (
                    <CheckIcon />
                  )}
                  <ProgressBar position={item.progress} />
                </li>
              ))}
          </FilesList>
        </DragAndDropZone>
      )}
    </Dropzone>
  )
}

export default DragAndDropUploader

export const DragAndDropUploaderArea = props => {
  const { callbackUploadSuccess, previewUrl } = props
  const [isLoading, setIsLoading] = useState(false)

  const handleUploadProcess = async file => {
    setIsLoading(true)
    try {
      // Se nenhum arquivo selecionado, não continua
      if (file.length === 0) return

      // Preview
      const reader = new FileReader()
      reader.onload = e => {
        previewUrl(e.target.result)
      }
      reader.readAsDataURL(file[0])

      // Cria form data com o arquivo a ser enviado
      const formData = new FormData()
      formData.append('file', file[0])

      // Tenta enviar arquivo
      const response = await api.post('upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'File-Options': '{ "compress": true }'
        },
        timeout: 600000
      })

      // Chama a props se existir
      if (callbackUploadSuccess) callbackUploadSuccess(response.data)
    } catch (error) {
      previewUrl(null)
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Dropzone onDrop={acceptedFiles => handleUploadProcess(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div isDragActive={isDragActive}>
          <DrapAndDrop {...getRootProps()}>
            <input {...getInputProps()} />
            {props.children}
          </DrapAndDrop>
          <Loading active={isLoading} />
        </div>
      )}
    </Dropzone>
  )
}

export const DragTeste = props => {
  const { callbackUploadSuccess, callbackUploadPreview, openFileDialog, showLoading, showAlert, options, ...restOfProps } = props
  const [isLoading, setIsLoading] = useState(false)
  const refDropzone = useRef()

  // Token de cancelamentodo axios
  const handleUploadProcess = async file => {
    setIsLoading(true)
    try {
      // Se nenhum arquivo selecionado, não continua
      if (file.length === 0) return

      // Gera id
      const uniqueIdAux = uniqueId()

      // Variáveis
      const { name, size, type } = file[0]

      if (size > 67108864) {
        if (showAlert) {
          alertDialog({
            type: 'Alert',
            title: `Não é possivel fazer o upload`,
            message: `O arquivo ultrapassa o tamanho de 64mb.`
          })
        }
        throw new Error()
      }

      // Token de cancelamento
      const handleAxiosCancelToken = axios.CancelToken.source()

      // Preview
      const reader = new FileReader()
      reader.onload = e => {
        if (callbackUploadPreview)
          callbackUploadPreview({
            uniqueId: uniqueIdAux,
            name,
            size,
            type,
            url: e.target.result,
            cancelUpload: () => {
              handleAxiosCancelToken.cancel()
            }
          })
      }
      reader.readAsDataURL(file[0])

      // Cria form data com o arquivo a ser enviado
      const formData = new FormData()
      formData.append('file', file[0])
      if (options) formData.append('options', JSON.stringify(options))

      // Tenta enviar arquivo
      const response = await api.post('upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        cancelToken: handleAxiosCancelToken.token,
        timeout: 600000
      })

      // Chama a props se existir
      if (callbackUploadSuccess) callbackUploadSuccess({ uniqueId: uniqueIdAux, ...response.data })
    } catch (error) {
      //if (callbackUploadPreview) callbackUploadPreview(null)
      console.log(error)
    }
    setIsLoading(false)
  }

  // Abre o diálogo de seleção
  useEffect(() => {
    if (!openFileDialog) return
    console.log(openFileDialog)
    refDropzone.current.open()
  }, [openFileDialog])

  return (
    <Dropzone ref={refDropzone} {...restOfProps} onDrop={acceptedFiles => handleUploadProcess(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <>
          <DrapAndDrop {...getRootProps()} isDragActive={isDragActive} {...restOfProps}>
            <input {...getInputProps()} />
            {props.children}
            {showLoading && <Loading active={isLoading} />}
          </DrapAndDrop>
        </>
      )}
    </Dropzone>
  )
}

export const uniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}