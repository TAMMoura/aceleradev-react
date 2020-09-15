import React from 'react';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ categories, isLoading, url }) => {
  return (
    <div className="categories" data-testid="categories">
      <div className="container">
        <h3 className="categories__title">Categorias</h3>
        <div className="categories__content">
          {isLoading ? (
            <Loading />
          ) : (
            categories?.length &&
            categories.map(({ id, icons, name }) => {
              const [icon] = icons;

              return (
                <CategoryItem
                  key={`category-${id}`}
                  id={id}
                  icon={icon}
                  name={name}
                  url={url}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
