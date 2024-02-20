import * as React from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useAuth } from '../../Components/utils/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function ActionAlerts({ errorMsgText, successMsg }) {
  const { error, setError, success, setSuccess } = useAuth()
  const navigate = useNavigate()

  console.log(error)

  return (
    <>
      {error && (
        <div className="fixed w-full left-0 bottom-0 bg-black/50 top-0 flex justify-end">
          <div className="w-[320px] relative top-20">
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert
                severity="warning"
                onClose={() => {
                  setError(!error)
                }}
              >
                {errorMsgText}
              </Alert>
            </Stack>
          </div>
        </div>
      )}

      {success && (
        <div className="fixed w-full left-0 bottom-0 bg-black/50 top-0">
          <div className=" max-w-[320px] relative top-20 left-[50%]">
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert
                severity="success"
                onClose={() => {
                  setSuccess(false)
                  navigate('/')
                }}
              >
                {successMsg}
              </Alert>
            </Stack>
          </div>
        </div>
      )}
    </>
  )
}
