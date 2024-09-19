import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { addressDetails, TaddressDetails } from "../../utils/form.schema";
import Grid from "@mui/material/Grid2";
import { Button, TextField } from "@mui/material";

interface IAddressDetails {
  formData: TaddressDetails;
  setFormData: (data: TaddressDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function AddressDetails({
  formData,
  setFormData,
  nextStep,
  prevStep,
}:IAddressDetails) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaddressDetails>({
    defaultValues: formData,
    resolver: zodResolver(addressDetails),
  });

  const onSubmit: SubmitHandler<TaddressDetails> = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Address Line 1"
            {...register("addressLine1")}
            error={!!errors.addressLine1}
            helperText={errors.addressLine1?.message}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Address Line 2"
            {...register("addressLine2")}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="City"
            {...register("city")}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="State"
            {...register("state")}
            error={!!errors.state}
            helperText={errors.state?.message}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Zip Code"
            {...register("zip")}
            error={!!errors.zip}
            helperText={errors.zip?.message}
          />
        </Grid>
        <Grid size={6}>
          <Button sx={{paddingX:5}} type="button" variant="contained" onClick={prevStep}>
            Back
          </Button>
        </Grid>
        <Grid size={6}>
          <Button sx={{paddingX:5}} variant="contained" type="submit">Next</Button>
        </Grid>
      </Grid>
    </form>
  );
}
