import { useState } from "react";
import { Link } from "react-router-dom";

const photoModules = import.meta.glob(
  "../assets/Heritage Invitational/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

const photos = Object.entries(photoModules)
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

function Photos() {
  const collagePhotos = photos.slice(0, 6);

  return (
    <section className="content-section photos-section">
      <div className="section-header">
        <span>Photos</span>
        <h2>Event photo collections and featured stills.</h2>
      </div>

      <Link
        to="/photos/heritage-invitational"
        className="photo-collage-link"
        aria-label="View the full Heritage Invitational photo gallery"
      >
        <div className="photo-collage">
          {collagePhotos.map((photo, index) => (
            <img
              src={photo.src}
              alt={`Heritage Invitational preview ${index + 1}`}
              className={`photo-collage-image photo-collage-image-${index + 1}`}
              loading="lazy"
              key={photo.title}
            />
          ))}
        </div>
        <div className="photo-collage-copy">
          <span>Heritage Invitational</span>
          <h3>View Full Gallery</h3>
          <p>Open the complete photo list from the Heritage Invitational shoot.</p>
        </div>
      </Link>
    </section>
  );
}

export function HeritageInvitationalPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="content-section photos-section">
      <div className="section-header">
        <span>Heritage Invitational</span>
        <h2>Complete photo gallery.</h2>
      </div>

      <Link to="/photos" className="photo-back-link">
        Back to Photos
      </Link>

      <div className="photo-grid">
        {photos.map((photo) => (
          <article className="photo-card" key={photo.title}>
            <button
              type="button"
              className="photo-button"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={`Heritage Invitational ${photo.title}`}
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
          aria-label={`Enlarged Heritage Invitational ${selectedPhoto.title}`}
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
            alt={`Heritage Invitational ${selectedPhoto.title}`}
            className="photo-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Photos;
