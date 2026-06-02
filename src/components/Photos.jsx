import { useState } from "react";
import { Link } from "react-router-dom";

const heritagePhotoModules = import.meta.glob(
  "../assets/Heritage Invitational/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const automotivePhotoModules = import.meta.glob(
  "../assets/Automotive/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const servicesPhotoModules = import.meta.glob(
  "../assets/Services/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const productsPhotoModules = import.meta.glob(
  "../assets/Products/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const celebrationPhotoModules = import.meta.glob(
  "../assets/Celebration/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const interviewsPhotoModules = import.meta.glob(
  "../assets/Interviews/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const buildPhotos = (modules) =>
  Object.entries(modules)
    .sort(([firstPath], [secondPath]) =>
      firstPath.localeCompare(secondPath, undefined, { numeric: true }),
    )
    .map(([path, src]) => ({
      src,
      title: path
        .split("/")
        .pop()
        .replace(/\.[^.]+$/, ""),
    }));

const heritagePhotos = buildPhotos(heritagePhotoModules);
const automotivePhotos = buildPhotos(automotivePhotoModules);
const servicesPhotos = buildPhotos(servicesPhotoModules);
const productsPhotos = buildPhotos(productsPhotoModules);
const celebrationPhotos = buildPhotos(celebrationPhotoModules);
const interviewsPhotos = buildPhotos(interviewsPhotoModules);

const albums = [
  {
    title: "Heritage Invitational",
    path: "/photos/heritage-invitational",
    description: "Open the complete photo list from the Heritage Invitational shoot.",
    photos: heritagePhotos,
  },
  {
    title: "Automotive",
    path: "/photos/automotive",
    description: "Open the complete photo list from the Automotive shoot.",
    photos: automotivePhotos,
  },
  {
    title: "Services",
    path: "/photos/services",
    description: "Open the complete photo list from the Services shoot.",
    photos: servicesPhotos,
  },
  {
    title: "Products",
    path: "/photos/products",
    description: "Open the complete photo list from the Products shoot.",
    photos: productsPhotos,
  },
  {
    title: "Celebration of Life",
    path: "/photos/celebration",
    description: "Open the complete photo list from the Celebration of Life shoot.",
    photos: celebrationPhotos,
  },
  {
    title: "Interviews",
    path: "/photos/interviews",
    description: "Open the complete photo list from the Interviews shoot.",
    photos: interviewsPhotos,
  },
];

function PhotoCollageLink({ album }) {
  const collagePhotos = album.photos.slice(0, 4);

  return (
    <Link
      to={album.path}
      className="photo-collage-link"
      aria-label={`View the full ${album.title} photo gallery`}
    >
      <div className="photo-collage">
        {collagePhotos.map((photo, index) => (
          <img
            src={photo.src}
            alt={`${album.title} preview ${index + 1}`}
            className={`photo-collage-image photo-collage-image-${index + 1}`}
            loading="lazy"
            key={photo.title}
          />
        ))}
      </div>
      <div className="photo-collage-copy">
        <span>{album.title}</span>
        <h3>View Full Gallery</h3>
        <p>{album.description}</p>
      </div>
    </Link>
  );
}

function PhotoGallery({ album }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="content-section photos-section">
      <div className="section-header">
        <span>{album.title}</span>
        <h2>Complete photo gallery.</h2>
      </div>

      <Link to="/photos" className="photo-back-link">
        Back to Photos
      </Link>

      <div className="photo-grid">
        {album.photos.map((photo) => (
          <article className="photo-card" key={photo.title}>
            <button
              type="button"
              className="photo-button"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={`${album.title} ${photo.title}`}
                className="photo-image"
                loading="lazy"
              />
            </button>
          </article>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged ${album.title} ${selectedPhoto.title}`}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            aria-label="Close enlarged photo"
            onClick={() => setSelectedPhoto(null)}
          >
            Close
          </button>
          <img
            src={selectedPhoto.src}
            alt={`${album.title} ${selectedPhoto.title}`}
            className="photo-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

const heritageAlbum = albums[0];
const automotiveAlbum = albums[1];
const servicesAlbum = albums[2];
const productsAlbum = albums[3];
const celebrationAlbum = albums[4];
const interviewsAlbum = albums[5];

function Photos() {
  return (
    <section className="content-section photos-section">
      <div className="section-header">
        <span>Photos</span>
        <h2>Event photo collections and featured stills.</h2>
      </div>

      <div className="photo-album-grid">
        {albums.map((album) => (
          <PhotoCollageLink album={album} key={album.title} />
        ))}
      </div>
    </section>
  );
}

export function HeritageInvitationalPhotos() {
  return <PhotoGallery album={heritageAlbum} />;
}

export function AutomotivePhotos() {
  return <PhotoGallery album={automotiveAlbum} />;
}

export function ServicesPhotos() {
  return <PhotoGallery album={servicesAlbum} />;
}

export function ProductsPhotos() {
  return <PhotoGallery album={productsAlbum} />;
}

export function CelebrationPhotos() {
  return <PhotoGallery album={celebrationAlbum} />;
}

export function InterviewsPhotos() {
  return <PhotoGallery album={interviewsAlbum} />;
}

export default Photos;
