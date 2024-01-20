import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import  Details  from '../components/Details';
import  ExerciseVideos  from '../components/ExerciseVideos';
import  SimilarExercises  from '../components/SimilarExercises'

const ExcerciseDetails = () => {
  return (
    <Box>
      <Details />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetails