export default theme => ({
  section: {
    marginTop: theme.spacing(3.75),
    marginBottom: theme.spacing(3.75),
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.1,
    position: 'relative',
    margin: 0,
    marginBottom: theme.spacing(3.75),
    '&:before': {
      content: '""',
      background: theme.palette.quaternary.main,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2.5),
  },
  icon: {
    backgroundColor: theme.palette.grey[20],
    borderRadius: '50%',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: 50,
      height: 50,
    },
  },
  gridItemCaption: {
    fontSize: '.875rem',
    fontWeight: 600,
    lineHeight: 1.4,
    margin: 0,
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
});
