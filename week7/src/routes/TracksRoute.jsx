import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { fetchTracks } from '../store/thunks';

import { cleanTracks } from '../store/actions/content';

import { Tracks } from '../containers';

import { getParams } from '../modules/helpers';

const TracksRoute = ({ path }) => {
  const { content } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname, state } = useLocation();
  const playlistId = getParams(pathname);
  const { categoryName } = state;

  useEffect(() => {
    dispatch(fetchTracks(playlistId));

    return () => {
      dispatch(cleanTracks());
    };
  }, [dispatch, playlistId]);

  return (
    <Tracks
      categoryName={categoryName}
      tracks={content.tracks}
      isLoading={content.tracks.length === 0}
      path={path}
    />

  );
};
export default TracksRoute;