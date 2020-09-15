import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { fetchPlaylists } from '../store/thunks';

import { cleanPlaylists } from '../store/actions/content';

import { Playlists } from '../containers';

import { getParams } from '../modules/helpers';

const PlaylistsRoute = ({ path }) => {
  const { playlists } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const { pathname, state } = useLocation();
  const { categoryName } = state;
  const categoryId = getParams(pathname);

  useEffect(() => {
    dispatch(fetchPlaylists(categoryId));

    return () => {
      dispatch(cleanPlaylists());
    };
  }, [dispatch, categoryId]);

  return (
    playlists.length && (
      <Playlists
        categoryName={categoryName}
        categoryId={categoryId}
        isLoading={playlists.length === 0}
        playlists={playlists}
        path={path}
      />

    )
  );
};

export default PlaylistsRoute;