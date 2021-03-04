import React from 'react';
import Button from '../../components/Button/Button';

const Question2 = ({ q, bindField, setQuestion2 }) => {
    if (q) {
        const answers = q.answerSelections.split(', ');
        return (
            <>
                <form
                    className="RadioGroup"
                    onSubmit={(event) => {
                        event.preventDefault();
                        const formData = new FormData(event.target);
                        const data = Object.fromEntries(formData.entries());
                        setQuestion2(data[q.slug]);
                    }}
                >
                    <div className="QuestionText">{q.text}</div>
                    {answers &&
                        answers.map((option) => (
                            <div key={`${q.slug}-${option}`} className="Radio">
                                <input
                                    type="radio"
                                    id={`${q.slug}-${option}`}
                                    name={q.slug}
                                    required={q.required}
                                    value={option}
                                    className="RadioButton"
                                    {...bindField(q.slug)}
                                />
                                <label htmlFor={q.slug} className="RadioLabel">
                                    {option}
                                </label>
                                <span className="RequiredError">
                                    *This field is required
                                </span>
                            </div>
                        ))}
                    <Button type="submit" label={'Submit'} />
                </form>
            </>
        );
    } else {
        return null;
    }
};

export default Question2;