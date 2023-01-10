import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import tecknocore from './tecknocore.png';
import { CiSearch } from "react-icons/ci";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


const SubNavbar = () => {

  return (
    <div className="navbar-container">

      
        <Link href="/"><h3>Top Deals</h3></Link>
      
      
        <Link href="/"><h3>Computers</h3></Link>
    
        <Link href="/"><h3>PC Parts</h3></Link>
      
        <Link href="/"><h3>Accessories</h3></Link>
      
        <Link href="/"><h3>Maker Projects</h3></Link>
      
        <Link href="/"><h3>Gift Ideas</h3></Link>
   

    </div>
  )
}

export default SubNavbar