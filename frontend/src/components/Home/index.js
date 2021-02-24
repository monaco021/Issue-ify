import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getIssues} from "../../store/home"
import "./home.css"

export default function SocialIssues () {
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.issue);
  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  return (
      <div>
          <div className="inner__div__container" >
            {causes && causes.map((cause) => {
              return (
                <Link key={`${cause.id}`} to={`/issues/${cause.socialIssue}`}>
                  <img className="issue__image_container" key={cause.imageUrl} src={cause.imageUrl} />
                  <div className="issue__text_container" >
                    {cause.socialIssue}
                  </div>
                </Link>
              )
            })}
          </div>
      </div>
    )
}
