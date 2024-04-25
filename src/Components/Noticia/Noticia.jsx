import React from 'react';

export const Noticia = ({ idNews, img, date,tittle, Description }) => {
  return (
    <div className="">
      <div className='flex flex items-center'  id={idNews}>
        <div><img className='p-10' src={img} alt="Imagen de la noticia" /></div>
        <hr className='color-black' />
        <div className='flex flex-col '>
          <h1 className='text-2xl'>{tittle}</h1>
          <p className='text-black'>{date}</p>
          <p className='black '>{Description}</p>
          
          <hr className=''/>
          
          
        </div>
      </div>
    </div>
  );
};
