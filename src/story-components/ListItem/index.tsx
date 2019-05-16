import * as React from 'react';

const ListItem = ({ style }) => (
  <div style={{
    background: 'white',
    borderRadius: '4px',
    border: '1px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    marginBottom: '4px',
    ...style,
  }}>
    <div style={{ marginRight: '16px' }}>
      <img src="https://placekitten.com/g/100/100" />
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
)

export default ListItem;
