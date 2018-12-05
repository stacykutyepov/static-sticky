const size = {
  mobile: '320px',
  tablet: '760px',
  laptop: '1020px',
  desktop: '1281px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};