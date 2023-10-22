import { MCubeElement, MMLCollisionStartEvent } from "@mml-io/mml-react-types";

import React, { useEffect, useRef, useState } from "react";

type Position = { x: number; y: number; z: number };

export default function CollisionReactExample() {
  const platformRef = useRef<MCubeElement>(null);
  const [users, setUsers] = useState(new Map());

  function handleCollisionstart(e: MMLCollisionStartEvent) {
    const { connectionId, position } = e.detail;

    const newUser = createUser(connectionId, position);

    if (!newUser) return;

    setUsers((oldUsers) => {
      return new Map(oldUsers).set(connectionId, newUser);
    });
  }

  function createUser(connectionId: number, position: Position) {
    const user = users.get(connectionId);

    if (user) {
      return;
    }

    const newUser = {
      color: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
      position: {
        x: position.x * 2,
        z: position.z * 2,
      },
    };

    return newUser;
  }

  useEffect(() => {
    const platform = platformRef.current;

    platform?.addEventListener("collisionstart", handleCollisionstart);

    return () => {
      platform?.removeEventListener("collisionstart", handleCollisionstart);
    };
  }, []);

  return (
    <m-group>
      <m-cube id="users-panel" height="6" width="12" depth="0.1" y="4" z="-2">
        <m-group rx="90" id="user-presence-holder">
          {[...users.entries()].map(([connectionId, cubeData]) => (
            <m-cube
              key={connectionId}
              collide={false}
              width="0.25"
              height="0.25"
              depth="0.25"
              y={0.25}
              position={cubeData.position}
              color={cubeData.color}
            />
          ))}
        </m-group>
      </m-cube>
      <m-cube
        id="platform"
        ref={platformRef}
        y="0.05"
        height="0.1"
        width="6"
        depth="3"
        color="green"
        collision-interval="100"
      ></m-cube>
    </m-group>
  );
}