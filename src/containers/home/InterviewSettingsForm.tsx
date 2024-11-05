import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import { PageNumbers } from "../../interface/home";
import { IInterViewSettings } from "../../interface/forms";
import {
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
} from "./constants";
import { useData } from "./DataProvider";
import * as Yup from "yup";

const InterviewDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
  const context = useData();

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  const { state, setState } = context;

  const {
    errors,
    touched,
    handleSubmit,
    values,
    setFieldTouched,
    setFieldValue,
  } = useFormik<IInterViewSettings>({
    initialValues: state.interviewSettings,
    validationSchema: Yup.object().shape({
      interviewMode: Yup.string()
        .typeError("Enter a valid interview mode")
        .required("Interview mode is required"),
      interviewDuration: Yup.string()
        .typeError("Enter a valid interview duration")
        .required("Interview duration is required"),
      interviewLanguage: Yup.string()
        .typeError("Enter a valid interview language")
        .required("Interview language is required"),
    }),
    onSubmit: (values) => {
      setState((prevState) => ({
        ...prevState,
        interviewSettings: values,
      }));
      console.log({ values });
      alert("Form successfully submitted");
    },
  });

  // to update context state
  const updateContextState = (name: string, value: string | number) => {
    setState((prevState) => ({
      ...prevState,
      interviewSettings: {
        ...prevState.interviewSettings,
        [name]: value,
      },
    }));
  };

  // change handler for select inputs
  const handleSelectChange = (name: string, value: string) => {
    setFieldValue(name, value);
    updateContextState(name, value);
  };

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormSelect
          label="Interview Mode"
          placeholder="Select interview mode"
          name="interviewMode"
          options={interviewModeOptions}
          onChange={handleSelectChange}
          onBlur={setFieldTouched}
          value={values?.interviewMode}
          error={errors?.interviewMode}
          touched={touched?.interviewMode}
        />
        <FormSelect
          label="Interview Duration"
          placeholder="Select interview duration"
          name="interviewDuration"
          options={interviewDurationOptions}
          onChange={handleSelectChange}
          onBlur={setFieldTouched}
          value={values?.interviewDuration}
          error={errors?.interviewDuration}
          touched={touched?.interviewDuration}
        />
        <FormSelect
          label="Interview Language"
          name="interviewLanguage"
          placeholder="Select interview language"
          options={interviewLanguageOptions}
          onChange={handleSelectChange}
          onBlur={setFieldTouched}
          error={errors.interviewLanguage}
          touched={touched.interviewLanguage}
          value={values.interviewLanguage}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(1)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default InterviewDetailsForm;
