import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

/**
 * Clickable thumbnails + shared lightbox (same behavior as Astrophotography).
 *
 * @param {object} props
 * @param {{ src: string; alt: string; label?: string; when?: string }[]} props.items
 * @param {string} [props.gridClassName] Classes for the grid wrapper (e.g. project-gallery, project-gallery-phone)
 * @param {string} [props.wrapperClassName] Optional outer wrapper (e.g. max-w-5xl for a single hero shot)
 * @param {boolean} [props.showFigcaptions] Show label · below thumbnails (astro style)
 */
const ProjectImageGallery = ({
  items,
  gridClassName = "project-gallery",
  wrapperClassName,
  showFigcaptions = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  const grid = (
    <div className={gridClassName}>
      {items.map((it, i) => (
        <figure key={`${it.src}-${i}`} className="m-0">
          <button
            type="button"
            className="project-gallery-thumb"
            onClick={() => setActiveIndex(i)}
            aria-label={`Enlarge: ${it.label || it.alt}`}
          >
            <img
              src={it.src}
              alt=""
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </button>
          {showFigcaptions && (it.label || it.when) && (
            <figcaption>
              {it.label && <strong>{it.label}</strong>}
              {it.label && it.when && (
                <span className="text-[var(--color-muted)]"> · {it.when}</span>
              )}
              {!it.label && it.when && (
                <span className="text-[var(--color-muted)]">{it.when}</span>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );

  const body = wrapperClassName ? (
    <div className={wrapperClassName}>{grid}</div>
  ) : (
    grid
  );

  return (
    <>
      {body}
      <ImageLightbox
        open={activeIndex !== null}
        item={
          active
            ? {
                src: active.src,
                alt: active.alt,
                label: active.label || active.alt,
                when: active.when,
              }
            : null
        }
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
};

export default ProjectImageGallery;
