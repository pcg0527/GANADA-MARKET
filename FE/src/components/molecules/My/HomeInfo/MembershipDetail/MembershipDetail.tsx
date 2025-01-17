import React from 'react';
import styled from '@emotion/styled';
import { Text } from 'components/atoms/My';
import { User } from 'types/Entity/UserAPI';

interface MembershipDetailProps {
  user: User;
}
function MembershipDetail({ user }: MembershipDetailProps) {
  return (
    <Molecules>
      <MembershipItem>
        <Text size={16} strong>
          {user.grade}
        </Text>
        <Text color="gray" size={13}>
          회원 등급
        </Text>
      </MembershipItem>
    </Molecules>
  );
}

const Molecules = styled.div`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    line-height: 19px;
    letter-spacing: -0.07px;
  }
`;

const MembershipItem = styled.div`
  display: inline-block;
  width: 159px;
  text-align: center;
`;
export default MembershipDetail;
