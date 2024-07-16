import React from "react";
import PropTypes from "prop-types";
import { Box, Icon, Sidebar, Popup } from "@embeddedchat/ui-elements";
import { css } from "@emotion/react";
import { getDemoSidebarStyles } from "./DemoSidebar.styles";

const DemoSidebar = ({ members, viewType = "Sidebar" }) => {
  const ViewComponent = viewType === "Popup" ? Popup : Sidebar;
  const styles = getDemoSidebarStyles();
  return (
    <ViewComponent
      title="Members"
      iconName="members"
      {...(viewType === "Popup" ? { isPopupHeader: true } : {})}
    >
      <Box css={styles.container}>
        {members.map((member, index) => (
          <Box key={index} css={styles.itemContainer}>
            <Icon
              name="avatar"
              alt="avatar"
              size="1.5rem"
              css={css`
                margin-right: 0.5rem;
              `}
            />
            <Box
              is="span"
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              {member.status && (
                <Icon name={member.status} size="1.25rem" css={styles.icon} />
              )}
              <Box is="span">{member.username}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </ViewComponent>
  );
};

DemoSidebar.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      avatarUrl: PropTypes.string,
      userStatus: PropTypes.string,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  viewType: PropTypes.oneOf(["Sidebar", "Popup"]),
};

export default DemoSidebar;
