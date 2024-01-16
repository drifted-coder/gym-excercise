import React, { useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setbodyParts] = useState([]);

  // useEffect(() => {
  //   const fetchExerciseData = async () => {
  //     const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  //     setbodyParts(['all',...bodyPartsData]);
  //   }
  //   fetchExerciseData();
  // }, [])
  
  const handleSearch = async() => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      const searchedExcercises = exercisesData.filter(
        (exercise) => 
          exercise.name.toLowerCase.includes(exercise)
          || exercise.name.toLowerCase.includes(exercise)
          || exercise.name.toLowerCase.includes(exercise)
          || exercise.name.toLowerCase.includes(exercise)
      );
      setSearch('');
      setExercises(searchedExcercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
