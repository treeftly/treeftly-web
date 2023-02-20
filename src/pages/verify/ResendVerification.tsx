import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import FormComponent from "../../components/FormComponent";
import MainLayout from "../../components/layouts/MainLayout";
import OnboardingLayout from "../../components/layouts/OnboardingLayout";
import LinkText from "../../components/LinkText";
import { key, resendVerification } from "../../services/verification";
import { useMutate } from "../../utils/hooks";

const successMsg = "We have sent your verification token to your email.";

const ResendVerification = () => {
  const { register, handleSubmit, errors, setError } = useForm();
  const { mutate, isLoading, isSuccess } = useMutate({
    key,
    mutateFn: resendVerification,
    successMsg,
    failureMsg: "Failed to resend verification token",
    onError: (err) => {
      if (err?.response?.status === 404) {
        return setError("email", { message: "Email address not found." });
      }

      if (err?.response?.status === 400) {
        return setError("email", { message: err.response?.data?.message });
      }

      return setError("email", {
        message: "Something went wrong with the request.",
      });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <MainLayout bg="gradientBg">
      <Helmet>
        <title>Resend Verification</title>
      </Helmet>
      <OnboardingLayout headerText="Resend Verification">
        <Text textAlign="center" mb={6} color="gray.600">
          {!isSuccess
            ? "Please input your email address to resend your verification code."
            : successMsg}
        </Text>
        {isSuccess && (
          <Text textAlign="center" mb={6}>
            After verification,{" "}
            <LinkText href="/sign-in" display="inline-block">
              sign-in
            </LinkText>{" "}
            with your account
          </Text>
        )}
        {!isSuccess && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormComponent
              id="email"
              label="Email Address"
              isRequired
              errors={errors}
            >
              <Input
                name="email"
                type="email"
                placeholder="hello@treeftly.com"
                autoFocus
                ref={register}
              />
            </FormComponent>
            <Button
              mb={4}
              isFullWidth
              variant="solid"
              colorScheme="primary"
              textTransform="uppercase"
              type="submit"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default ResendVerification;
