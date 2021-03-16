import React from 'react';

import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const listArr = props.interviewers.map(inter => {
    return (
      <InterviewerListItem
        key={inter.id}
        name={inter.name}
        avatar={inter.avatar}
        selected={inter.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(inter.id)}
      />
    );
  });
  return (
    <section>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listArr}</ul>
    </section>
  );
}