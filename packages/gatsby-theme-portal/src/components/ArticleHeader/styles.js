export default theme => ({
  header: {
    margin: 'auto',
    maxWidth: 750,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    '& svg': {
      width: 28,
      height: 28,
      fill: theme.palette.common.black,
    },
  },
  headingPrimary: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(1.875),
    },
  },
  headingSecondary: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: 0,
    marginBottom: theme.spacing(2.5),
  },
  textSecondary: {
    paddingBottom: theme.spacing(1.25),
    fontSize: '.875rem',
    margin: 0,
    marginBottom: theme.spacing(1.25),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      marginBottom: theme.spacing(2),
    },
  },
  articleInfo: {
    fontSize: '.875rem',
    fontWeight: 400,
    maxWidth: 750,
    marginBottom: theme.spacing(1.875),
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  articleAuthor: {},
  articleDate: {},
  divider: {
    margin: 0,
    marginLeft: theme.spacing(1.25),
    marginRight: theme.spacing(1.25),
  },
  articleInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  heroImage: {
    marginTop: theme.spacing(1.25),
    position: 'relative',
    '& iframe': {
      height: 263,
      [theme.breakpoints.up('md')]: {
        height: 399,
      },
    },
  },
  iconVideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '& svg': {
      transition: 'all .5s',
      fill: theme.palette.common.white,
      width: 60,
      height: 60,
      cursor: 'pointer',
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.main,
        transform: 'scale(1.2)',
      },
    },
  },
  textCenter: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  link: {
    backgroundImage: `linear-gradient(120deg,${theme.palette.primary.main} 0%,${theme.palette.primary.main} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 3px',
    backgroundPosition: '0 100%',
    color: theme.palette.common.black,
    lineHeight: 1.75,
    textDecoration: 'none',
    display: 'flex',
  },
  tutorialInfo: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  tutorialInfoBlock: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontSize: '.75rem',
    lineHeight: 1.1,
    letterSpacing: 1,
    marginRight: theme.spacing(2.5),
    flex: '1 50%',
    '&:last-child': {
      marginRight: 0,
    },
    '& strong': {
      display: 'block',
      marginBottom: theme.spacing(1),
      textTransform: 'uppercase',
    },
    '& span': {
      textTransform: 'capitalize',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: theme.spacing(2.5),
    },
    '& svg': {
      marginRight: theme.spacing(1.25),
      opacity: 0.2,
      '&.active': {
        opacity: 1,
      },
    },
  },
  authorInfo: {
    display: 'flex',
    '& .gatsby-image-wrapper': {
      width: 25,
      height: 25,
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary.main}`,
      marginRight: theme.spacing(1.25),
    },
    '& picture img': {
      width: '25px !important',
      height: '25px !important',
      objectFit: 'contain !important',
    },
  },
});
