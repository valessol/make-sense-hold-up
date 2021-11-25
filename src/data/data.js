import axios from 'axios'
import { useState } from 'react'


export const getData = async (userEmail) => {

    const res = await axios.get(`https://equipo15-repositorio-b.herokuapp.com/api/entrepreneurship/byid/${userEmail}`)
    return res.data[0]
    
}


export const postEntrepreneurshipData = async (data, user) => {
  const entrepreneurshipData = {
    representativeName: data.representativeName,
    representativeEmail: data.representativeEmail,
    email: user,
    name: data.name,
    description: data.description,
    confirmWorkshop: false
  }
  
  const entrepreneurshipLogo = {
    file: data.file
  }

  await axios.post('https://equipo15-repositorio-b.herokuapp.com/api/entrepreneurship', entrepreneurshipData)
  //await axios.post(`https://makesense-back.herokuapp.com/api/entrepreneurship/${user}/challenge/1/uploadphoto`, entrepreneurshipLogo, user)
}



export const postChallengeData = async (data, userEmail) => {
  
  return await axios.post(`https://equipo15-repositorio-b.herokuapp.com/api/entrepreneurship/${userEmail}/challenge`, data)
    
}



export const postCitizenData = async (data, userEmail) => {

  return await axios.post(`https://equipo15-repositorio-b.herokuapp.com/api/entrepreneurship/${userEmail}/challenge/1/citizen`, data)
    
}

export const postEntrepreneurRegistration = async (data) => {
  return await axios.post(`https://equipo15-repositorio-b.herokuapp.com/api/entrepreneur`, data)
}
