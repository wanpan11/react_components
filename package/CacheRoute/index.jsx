import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const CacheRouteDiv = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
`;

/**
 * @description  当前 url 与 path模糊匹配时缓存组件, 当前 url 与 path相同时展示组件， 不要放在 Switch 中
 * @param {string} path string 需要开启缓存的路径 模糊匹配
 * @param {children} children function_or_component 如果是函数会接收 history 作为参数，组件则直接渲染
 * @returns
 */
export default function CacheRoute({ path, children }) {
  return (
    <Route>
      {(history) => {
        const {
          location: { pathname },
        } = history;

        if (pathname.indexOf(path)) {
          return null;
        }

        return (
          <CacheRouteDiv show={pathname === path}>
            {children(history)}
          </CacheRouteDiv>
        );
      }}
    </Route>
  );
}
