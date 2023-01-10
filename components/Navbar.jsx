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


const Navbar = () => {

  return (
    <div className="navbar-container">

      <p className="logo">
        <Link href="/">
        <Image
          src={tecknocore}
          alt="Picture of the author"
          width={146}
          height={40}
          lazy="true"
        />
        </Link>

      </p>
<div className="search">

      <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <CiSearch
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="30px"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </CiSearch>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
</div>

      <button type="button" className="cart-icon" >
        {/*  onClick="/"> */}
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar