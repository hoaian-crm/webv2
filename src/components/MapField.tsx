import { Autocomplete, Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { useAddress } from "@/hooks/useAddress";
import React, { useContext, useState } from 'react';
import { LocationOn } from "@mui/icons-material";
import { useMap } from "@/hooks";
import { FormContext } from "./Form";
import { TextField, TextFieldProps } from "./TextField";

export type MapFieldProps = TextFieldProps & {};

export const MapField: React.FC<TextFieldProps> = (props) => {

  const { query, setInput } = useAddress();
  const { viewPlaceId } = useMap();
  const [placeholder, setPlaceholder] = useState("Search location ...");

  const { onChange } = useContext(FormContext);

  return <Autocomplete
    loading={query.isLoading}
    loadingText={
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    }
    options={query.data?.result || []}
    getOptionLabel={(option) => option.structured_formatting.main_text}
    onChange={(_, value) => {
      if (props.name) onChange(props.name, value?.place_id);
    }}
    renderOption={(props, option) => {
      return <Box
        component="li"
        {...props}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingX: 1,
          width: "100%",
        }}>
        <Box>
          <Typography color="text.primary" variant="body2">
            {option.structured_formatting.main_text}
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {option.structured_formatting.secondary_text}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        <IconButton onClick={(e) => {
          e.stopPropagation();
          viewPlaceId(option.place_id);
        }}>
          <LocationOn color="primary" />
        </IconButton>
      </Box>
    }}
    renderInput={(params) => {
      return <TextField
        placeholder={placeholder}
        onChange={(e) => {
          setInput(e.target.value)
          setPlaceholder(e.target.value);
        }}
        name={undefined}
        {...params}
        {...props}
      />
    }}
  />
}
