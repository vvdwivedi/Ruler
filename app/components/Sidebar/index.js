/**
 *
 * Sidebar
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <SidebarWrapper>
      <MenuItem>
        <MenuLink to="/">Rules</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/entities">Entities</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/about">About</MenuLink>
      </MenuItem>
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {};

export default memo(Sidebar);

export const SidebarWrapper = styled.div`
  width: 300px;
  background: #fff;
  height: calc(100vh - 60px);
`;

export const MenuLink = styled(Link)`
  color: #1b998b;
  text-decoration: none;
  font-size: 14px;
  padding: 30px;
  line-height: 40px;
`;

export const MenuItem = styled.div``;
