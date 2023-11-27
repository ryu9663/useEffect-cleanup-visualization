import { CountDepBtn, EmptySidebarBtn } from "@/components/atoms";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = memo(
  () => {
    return (
      <SidebarWrapper>
        <ul>
          <li className="list">
            <Link to="/empty-dep">
              <EmptySidebarBtn />
            </Link>
          </li>
          <li className="list">
            <Link to="/count-dep">
              <CountDepBtn />
            </Link>
          </li>
        </ul>
      </SidebarWrapper>
    );
  },
  () => true
);

const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 100%;
  background-color: blue;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > li {
      width: 300px;
      height: 400px;
      background-color: white;
      border-radius: 10px;

      .button {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
