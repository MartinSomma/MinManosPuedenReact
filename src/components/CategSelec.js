import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategSelec({ onSelect, valoresCats }) {

 
  const [categoria, setCategoria] = React.useState("")


  const handleChange = (event) => {
    setCategoria(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="categ-label">
          Categoria
        </InputLabel>
        <Select
          labelId="categ-label"
          id="categ"
          value={categoria}
          onChange={handleChange}
          label="Categoria"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          {valoresCats.map( (e, id=1) => { return <MenuItem key={id++} value={e}>{e}</MenuItem> } )}
          
        </Select>
      </FormControl>
    </div>
  );
}

