import Grid from "@mui/material/Grid2";
import { FormData } from "../../utils/form.schema";
import { Button, TextField } from "@mui/material";

interface IConformationDetails {
  formData: FormData;
  prevStep: () => void;
  submitForm: () => void;
}

export default function Conformation({ formData, prevStep, submitForm }:IConformationDetails) {
  return (
    <div>
      <Grid container spacing={2}>
      <Grid size={12}>
            <TextField
              fullWidth
              aria-readonly
              label="Name"
              value={formData.name}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              aria-readonly
              label="Email"
              value={formData.email}

            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              aria-readonly
              label="Phone"
              value={formData.phone}

            />
          </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            aria-readonly
            label="Address Line 1"
            value={formData.addressLine1}

          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            aria-readonly
            label="Address Line 2"
            value={formData.addressLine2}

          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            aria-readonly
            label="City"
            value={formData.city}

          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            aria-readonly
            label="State"
            value={formData.state}

          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            aria-readonly
            label="Zip Code"
            value={formData.zip}

          />
        </Grid>
        <Grid size={6}>
          <Button sx={{paddingX:5}} type="button" variant="contained" onClick={prevStep}>Back</Button>
        </Grid>
        <Grid size={6}>
          <Button sx={{paddingX:5}} type="button" variant="contained" onClick={submitForm}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
}
