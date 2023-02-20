import { Button, Divider, Heading, Input } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useForm } from 'react-hook-form';

// @ts-expect-error TS(6142): Module '../../components/FormComponent' was resolv... Remove this comment to see the full error message
import FormComponent from '../../components/FormComponent';
// @ts-expect-error TS(6142): Module '../../components/layouts/PageLayout' was r... Remove this comment to see the full error message
import PageLayout from '../../components/layouts/PageLayout';
// @ts-expect-error TS(6142): Module '../../components/PageHeader' was resolved ... Remove this comment to see the full error message
import PageHeader from '../../components/PageHeader';
// @ts-expect-error TS(6142): Module '../../components/password/PasswordInput' w... Remove this comment to see the full error message
import PasswordInput from '../../components/password/PasswordInput';
import { key, updatePassword, updateProfile } from '../../services/users';
import { useAuth, useMutate } from '../../utils/hooks';

const Profie = () => {
  const {
    authData: { user, ...rest },
    setAuthData,
  } = useAuth();
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  });
  const {
    register: registerPwd,
    errors: errorsPwd,
    handleSubmit: handleSubmitPwd,
    getValues,
    reset,
  } = useForm();
  const { mutate } = useMutate({
    mutateFn: updateProfile,
    key,
    successMsg: 'Successfully updated your profile',
    failureMsg: 'Failed to update your profile',
    onSuccess: (response: any) => {
      setAuthData({ ...rest, user: response });
    },
  });
  const { mutate: mutatePassword } = useMutate({
    mutateFn: updatePassword,
    key: 'password',
    successMsg: 'Successfully updated password',
    failureMsg: 'Failed to update password',
    onSuccess: reset,
  });

  const onUpdateProfile = (data: any) => {
    const payload = { ...data, id: user.id };
    mutate(payload);
  };

  const onUpdatePassword = (data: any) => {
    const payload = { ...data, id: user.id };
    mutatePassword(payload);
  };

  if (!user) {
    return null;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageHeader>Profile</PageHeader>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageLayout>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit(onUpdateProfile)}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Heading size="md" mb="4">
            Update Profile
          </Heading>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="firstName"
            label="First Name"
            isRequired
            errors={errors}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Input
              placeholder="John"
              name="firstName"
              autoFocus
              ref={register}
            />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="lastName"
            label="Last Name"
            isRequired
            errors={errors}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Input placeholder="Doe" name="lastName" ref={register} />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="email"
            label="Email Address"
            isRequired
            errors={errors}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Input
              type="email"
              name="email"
              placeholder="johndoe@treeftly.com"
              ref={register}
            />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Button
            type="submit"
            variant="solid"
            colorScheme="primary"
            textTransform="uppercase"
          >
            Update profile
          </Button>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
          because no i... Remove this comment to see the full error message
        </form>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Divider my="4" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmitPwd(onUpdatePassword)}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Heading size="md" mb="4">
            Update Password
          </Heading>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="currentPassword"
            label="Current Password"
            isRequired
            errors={errorsPwd}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <PasswordInput name="currentPassword" ref={registerPwd} />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="password"
            label="New Password"
            isRequired
            errors={errorsPwd}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <PasswordInput name="password" ref={registerPwd} />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="repeatPassword"
            label="Confirm Password"
            isRequired
            errors={errorsPwd}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <PasswordInput
              name="repeatPassword"
              ref={registerPwd({
                validate: (value) => {
                  const password = getValues('password');
                  return value === password || 'Password does not match';
                },
              })}
            />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Button
            type="submit"
            variant="solid"
            colorScheme="primary"
            textTransform="uppercase"
          >
            Update password
          </Button>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
          because no i... Remove this comment to see the full error message
        </form>
      </PageLayout>
    </>
  );
};

export default Profie;
