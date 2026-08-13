import game from './game.js';
import it from './it.js';

export const trackList = [game, it];

export const tracks = { game, it };

/** The other track, for the cross-link in the header. */
export const otherTrack = (id) => trackList.find((track) => track.id !== id);
