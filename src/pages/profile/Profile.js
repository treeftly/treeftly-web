import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Divider, Heading } from '@chakra-ui/layout'
import React from 'react'
import { useForm } from 'react-hook-form'
import FormComponent from '../../components/FormComponent'
import PageLayout from '../../components/layouts/PageLayout'
import PageHeader from '../../components/PageHeader'
import PasswordInput from '../../components/password/PasswordInput'
import { updateProfile, key, updatePassword } from '../../services/users'
import { useAuth, useMutate } from '../../utils/hooks'

const Profie = () => {
  const {
    authData: { user, ...rest },
    setAuthData,
  } = useAuth()
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  })
  const {
    register: registerPwd,
    errors: errorsPwd,
    handleSubmit: handleSubmitPwd,
    getValues,
    reset,
  } = useForm()
  const { mutate } = useMutate({
    mutateFn: updateProfile,
    key,
    successMsg: 'Successfully updated your profile',
    failureMsg: 'Failed to update your profile',
    onSuccess: (response) => {
      setAuthData({ ...rest, user: response })
    },
  })
  const { mutate: mutatePassword } = useMutate({
    mutateFn: updatePassword,
    key: 'password',
    successMsg: 'Successfully updated password',
    failureMsg: 'Failed to update password',
    onSuccess: reset,
  })

  const onUpdateProfile = (data) => {
    const payload = { ...data, id: user.id }
    mutate(payload)
  }

  const onUpdatePassword = (data) => {
    const payload = { ...data, id: user.id }
    mutatePassword(payload)
  }

  if (!user) {
    return null
  }

  return (
    <>
      <PageHeader>Profile</PageHeader>
      <PageLayout>
        <form onSubmit={handleSubmit(onUpdateProfile)}>
          <Heading size='md' mb='4'>
            Update Profile
          </Heading>
          <FormComponent id='firstName' label='First Name' isRequired errors={errors}>
            <Input placeholder='John' name='firstName' autoFocus ref={register} />
          </FormComponent>
          <FormComponent id='lastName' label='Last Name' isRequired errors={errors}>
            <Input placeholder='Doe' name='lastName' ref={register} />
          </FormComponent>
          <FormComponent id='email' label='Email Address' isRequired errors={errors}>
            <Input type='email' name='email' placeholder='johndoe@treeftly.com' ref={register} />
          </FormComponent>
          <Button type='submit' variant='solid' colorScheme='primary' textTransform='uppercase'>
            Update profile
          </Button>
        </form>

        <Divider my='4' />

        <form onSubmit={handleSubmitPwd(onUpdatePassword)}>
          <Heading size='md' mb='4'>
            Update Password
          </Heading>
          <FormComponent
            id='currentPassword'
            label='Current Password'
            isRequired
            errors={errorsPwd}
          >
            <PasswordInput name='currentPassword' ref={registerPwd} />
          </FormComponent>
          <FormComponent id='password' label='New Password' isRequired errors={errorsPwd}>
            <PasswordInput name='password' ref={registerPwd} />
          </FormComponent>
          <FormComponent id='repeatPassword' label='Confirm Password' isRequired errors={errorsPwd}>
            <PasswordInput
              name='repeatPassword'
              ref={registerPwd({
                validate: (value) => {
                  const password = getValues('password')
                  return value === password || 'Password does not match'
                },
              })}
            />
          </FormComponent>
          <Button type='submit' variant='solid' colorScheme='primary' textTransform='uppercase'>
            Update password
          </Button>
        </form>
      </PageLayout>
    </>
  )
}

export default Profie
