export default interface ISearchedTracks {
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: ITrack[];
  };
}

interface ITrack {
  album: IAlbum;
  artists: IArtist[];
  name: string;
  available_markets: string[];
  is_playable: boolean;
}

interface IAlbum {
  name: string;
  images: IAlbumImage[];
}

interface IAlbumImage {
  height: number;
  width: number;
  url: string;
}

interface IArtist {
  name: string;
}
