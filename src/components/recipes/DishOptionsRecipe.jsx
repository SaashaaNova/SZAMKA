import React from 'react';

export default function DishOptionsRecipe() {
  const types = [
    {
      title: 'breakfast',
      titlePolish: 'śniadanie',
      color: '#417238',
      icon: 'coffee',
    },
    {
      title: 'dinner',
      titlePolish: 'obiad',
      color: '#F5A236',
      icon: 'utensils',
    },
    {
      title: 'supper',
      titlePolish: 'kolacja',
      color: '#275C91',
      icon: 'carrot',
    },
  ];

  const options = types.map((type, key) => (
    <option
      key={key}
      id={key}
      value={type.title}
      data-color={type.color}
      data-icon={type.icon}
      data-polish={type.titlePolish}
    >
      {type.titlePolish}
    </option>
  ));


  return (
    <>
      {options}
    </>
  );
}
