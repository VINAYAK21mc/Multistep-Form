import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { SubmitHandler, useForm } from "react-hook-form";
import { TpersonalDetails , personalDetails } from "../../utils/form.schema";

interface IPersonalDetails {
  formData: TpersonalDetails;
  setFormData: (data: TpersonalDetails) => void;
  nextStep: () => void;
}

export default function PersonalDetails({ formData, setFormData, nextStep }:IPersonalDetails) {
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: formData,
      resolver: zodResolver(personalDetails),
    });

    const onSubmit:SubmitHandler<TpersonalDetails> = (data) => {
      setFormData({ ...formData, ...data });
      console.log(data)
      nextStep();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Phone"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
          <Grid size={12} sx={{display:"flex", justifyContent:"end"}}>
            <Button variant="contained" type="submit" sx={{paddingX:5}}>Next</Button>
          </Grid>
        </Grid>
      </form>
    );
  };

