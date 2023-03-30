import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

type propType ={
    children: any
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer(props:propType) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      onMouseDown={toggleDrawer(anchor,false)}
     
    >
   <div>


   
   </div>
    </Box>
  );

  return (
    <div >
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}></Button> */}

          <div onMouseOver={toggleDrawer(anchor, true)}> {props.children}</div>
          <Drawer
            anchor={anchor}
            variant="temporary"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            ModalProps={{
                keepMounted: false,
              }}
            // onMouseOut={toggleDrawer("top", false)}
            // onMouseOutCapture={toggleDrawer("top", false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}