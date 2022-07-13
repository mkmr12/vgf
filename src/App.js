import * as React from 'react';
import Button from '@mui/material/Button';
import Muimodal from './Components/Muimodal';



export default function App() {
  // switch to open close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const demand=()=>{
    setOpen(false)
  }
  return (
    <div>
      <Button onClick={handleOpen}>Couldn't find patient? Create New</Button>
      <Muimodal open={open} demand={demand}/>
    </div>
  );
}
