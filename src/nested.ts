import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (questions: Question): boolean => questions.published,
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const fullQuestions = questions.filter(
        (questions: Question) =>
            questions.body.length != 0 ||
            questions.expected.length != 0 ||
            questions.options.length != 0,
    );
    return fullQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const lookedForQuestion = questions.find(
        (question: Question): boolean => question.id == id,
    );
    if (lookedForQuestion != null) {
        return lookedForQuestion;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeQuestion = questions.filter(
        (question: Question): boolean => question.id != id,
    );
    return removeQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    const justQuestionNames = questions.map(
        (question: Question): string => question.name,
    );
    return justQuestionNames;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    interface Answer {
        questionId: number;
        correct: boolean;
        text: string;
        submitted: boolean;
    }
    const madeAnswers: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            correct: false,
            text: "",
            submitted: false,
        }),
    );
    return madeAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    const modifiedQuestions = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true,
        }),
    );

    return modifiedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newListOfQuestions = [
        ...questions,
        makeBlankQuestion(id, name, type),
    ];
    return newListOfQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const modifiedQuestions = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id == targetId ? newName : question.name,
        }),
    );

    return modifiedQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const modifiedQuestions = questions.map((question: Question): Question => {
        if (question.id !== targetId) {
            return question;
        }

        let newOptions = [...question.options];

        if (targetOptionIndex === -1) {
            newOptions = [...newOptions, newOption];
        } else {
            newOptions[targetOptionIndex] = newOption;
        }

        return {
            ...question,
            options: newOptions,
        };
    });
    return modifiedQuestions;
}
