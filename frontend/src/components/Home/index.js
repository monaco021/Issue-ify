import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getIssues} from "../../store/home"

export default function SocialIssues () {
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.issue);
  console.log("hello: ", causes)
  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  return (
      <div>
          <h1>Hello</h1>
          <div>
            {causes && causes.map((cause) => {
              return (
                <div>
                  {cause.socialIssue}
                </div>
              )
            })}
          </div>
      </div>
    )
}
