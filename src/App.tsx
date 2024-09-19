import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./App.css";
import AddressDetails from "./components/forms/AddressDetails";
import Conformation from "./components/forms/Conformation";
import PersonalDetails from "./components/forms/PersonalDetails";
import { Container } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [currentStep, setStep] = useState(0);

  const initialData = () => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zip: "",
        };
  };

  const [formData, setFormData] = useState(initialData);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(currentStep + 1);
  const prevStep = () => setStep(currentStep - 1);

  const submitForm = async () => {
    const delay = (ms: number) =>
      new Promise(() => setTimeout(()=>{
        console.log("Form submitted: ", formData);
        localStorage.removeItem("formData"); 
        setStep(0);
        setFormData(initialData)
      }, ms));
    await delay(2000);
    // Clear form data upon submission
  };

  return (
    <div className="flex flex-col items-center justify-center container">
      <Typography fontSize={36} fontWeight={400} color="textPrimary">
        Mutli Step Form
      </Typography>
      <Container maxWidth="sm">
        <Box sx={{  marginBottom: 5 }}>
          <Tabs value={currentStep} aria-label="basic tabs example" centered>
            <Tab label="Personal Details" {...a11yProps(0)} />
            <Tab label="Address Details" {...a11yProps(1)} />
            <Tab label="Conformation" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {currentStep === 0 && (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {currentStep === 1 && (
          <AddressDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 2 && (
          <Conformation
            formData={formData}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
