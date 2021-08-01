import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Activity = {
  __typename?: 'Activity';
  assignments?: Maybe<Array<Assignment>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  quizes?: Maybe<Array<Quiz>>;
  resources?: Maybe<Array<Resource>>;
  section: Section;
  sectionId: Scalars['String'];
  type: ActivityType;
  university: University;
  universityId: Scalars['String'];
};

export enum ActivityType {
  Assignment = 'ASSIGNMENT',
  Quiz = 'QUIZ',
  Resource = 'RESOURCE'
}

export type Assignment = {
  __typename?: 'Assignment';
  activity: Activity;
  activityId: Scalars['ID'];
  deadline: Scalars['DateTime'];
  maxGrade: Scalars['Float'];
  university: University;
  universityId: Scalars['String'];
  userAssignments?: Maybe<Array<UserAssignment>>;
};

export type AssignmentObject = BaseActivityInterface & {
  __typename?: 'AssignmentObject';
  createdAt: Scalars['DateTime'];
  deadline: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files: Array<Scalars['String']>;
  id: Scalars['String'];
  maxGrade: Scalars['Float'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
  type: Scalars['String'];
  universityId: Scalars['String'];
};

export type Authentication = {
  __typename?: 'Authentication';
  accessToken: Scalars['String'];
};

export type BaseActivityInterface = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files: Array<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
  type: Scalars['String'];
  universityId: Scalars['String'];
};

export type College = {
  __typename?: 'College';
  collegeUsers?: Maybe<Array<CollegeUser>>;
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  university: University;
  universityId: Scalars['String'];
};

export type CollegeObject = {
  __typename?: 'CollegeObject';
  courses: Array<CourseObject>;
  id: Scalars['ID'];
  name: Scalars['String'];
  universityId: Scalars['String'];
};

export type CollegeUser = {
  __typename?: 'CollegeUser';
  college: College;
  collegeId: Scalars['String'];
  courseUsers?: Maybe<Array<CourseUser>>;
  id: Scalars['ID'];
  universityUser: UniversityUser;
  universityUserId: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  college: College;
  collegeId: Scalars['String'];
  courseUsers?: Maybe<Array<CourseUser>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  sections?: Maybe<Array<Section>>;
  university: University;
  universityId: Scalars['String'];
};

export type CourseObject = {
  __typename?: 'CourseObject';
  collegeId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  universityId: Scalars['String'];
};

export type CourseUser = {
  __typename?: 'CourseUser';
  collegeUser: CollegeUser;
  collegeUserId: Scalars['String'];
  course: Course;
  courseId: Scalars['String'];
  id: Scalars['ID'];
};

export type CreateAssignmentInput = {
  deadline: Scalars['DateTime'];
  description: Scalars['String'];
  maxGrade: Scalars['Float'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
};

export type CreateCollegeInput = {
  name: Scalars['String'];
};

export type CreateCourseInput = {
  collegeId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateQuizInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
};

export type CreateResourceInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
};

export type CreateSectionInput = {
  courseId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUniversityInput = {
  name: Scalars['String'];
};


export type GroupedByRoleUniversitiesObject = {
  __typename?: 'GroupedByRoleUniversitiesObject';
  role: Scalars['String'];
  universities: Array<UniversityObject>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssignment: BaseActivityInterface;
  createCollege: CollegeObject;
  createCourse: CourseObject;
  createQuiz: BaseActivityInterface;
  createResource: BaseActivityInterface;
  createSection: SectionObject;
  createUniversity: UniversityObject;
  deleteActivity: BaseActivityInterface;
  deleteCollege: CollegeObject;
  deleteCourse: CourseObject;
  deleteSection: SectionObject;
  deleteUniversity: UniversityObject;
  leaveUniversity: UniversityObject;
  login: Authentication;
  logout?: Maybe<Authentication>;
  refreshTokens: Authentication;
  register: Authentication;
  updateAssignment: BaseActivityInterface;
  updateCollege: CollegeObject;
  updateCourse: CourseObject;
  updateMyAssignment: UserAssignmentObject;
  updateQuiz: BaseActivityInterface;
  updateResource: BaseActivityInterface;
  updateSection: SectionObject;
  updateUniversity: UniversityObject;
};


export type MutationCreateAssignmentArgs = {
  data: CreateAssignmentInput;
  files: Array<Scalars['Upload']>;
};


export type MutationCreateCollegeArgs = {
  data: CreateCollegeInput;
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreateQuizArgs = {
  data: CreateQuizInput;
  files: Array<Scalars['Upload']>;
};


export type MutationCreateResourceArgs = {
  data: CreateResourceInput;
  files: Array<Scalars['Upload']>;
};


export type MutationCreateSectionArgs = {
  data: CreateSectionInput;
};


export type MutationCreateUniversityArgs = {
  data: CreateUniversityInput;
  logo?: Maybe<Scalars['Upload']>;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['String'];
  type: ActivityType;
};


export type MutationDeleteCollegeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUniversityArgs = {
  id: Scalars['String'];
};


export type MutationLeaveUniversityArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  user: LoginUserInput;
};


export type MutationRegisterArgs = {
  avatar?: Maybe<Scalars['Upload']>;
  user: RegisterUserInput;
};


export type MutationUpdateAssignmentArgs = {
  data: UpdateAssignmentInput;
  id: Scalars['String'];
  newFiles: Array<Scalars['Upload']>;
};


export type MutationUpdateCollegeArgs = {
  data: CreateCollegeInput;
  id: Scalars['String'];
};


export type MutationUpdateCourseArgs = {
  data: CreateCourseInput;
  id: Scalars['String'];
};


export type MutationUpdateMyAssignmentArgs = {
  data: UpdateMyAssignmentInput;
  id: Scalars['String'];
  newFiles: Array<Scalars['Upload']>;
};


export type MutationUpdateQuizArgs = {
  data: UpdateQuizInput;
  id: Scalars['String'];
  newFiles: Array<Scalars['Upload']>;
};


export type MutationUpdateResourceArgs = {
  data: UpdateResourceInput;
  id: Scalars['String'];
  newFiles: Array<Scalars['Upload']>;
};


export type MutationUpdateSectionArgs = {
  data: CreateSectionInput;
  id: Scalars['String'];
};


export type MutationUpdateUniversityArgs = {
  data: CreateUniversityInput;
  id: Scalars['String'];
  logo?: Maybe<Scalars['Upload']>;
};

export type Query = {
  __typename?: 'Query';
  activity: BaseActivityInterface;
  colleges: Array<CollegeObject>;
  me: UserObject;
  myAssignment?: Maybe<UserAssignmentObject>;
  sections: Array<SectionObject>;
  userAssignments: Array<UserAssignmentObject>;
};


export type QueryActivityArgs = {
  id: Scalars['String'];
};


export type QueryCollegesArgs = {
  universityId: Scalars['String'];
};


export type QueryMyAssignmentArgs = {
  id: Scalars['String'];
};


export type QuerySectionsArgs = {
  courseId: Scalars['String'];
};


export type QueryUserAssignmentsArgs = {
  assignmentId: Scalars['String'];
};

export type Quiz = {
  __typename?: 'Quiz';
  activity: Activity;
  activityId: Scalars['ID'];
  university: University;
  universityId: Scalars['String'];
};

export type QuizObject = BaseActivityInterface & {
  __typename?: 'QuizObject';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files: Array<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
  type: Scalars['String'];
  universityId: Scalars['String'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  fatherInitial: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  activity: Activity;
  activityId: Scalars['ID'];
  university: University;
  universityId: Scalars['String'];
};

export type ResourceObject = BaseActivityInterface & {
  __typename?: 'ResourceObject';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files: Array<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
  type: Scalars['String'];
  universityId: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
  scopes?: Maybe<Array<Scope>>;
  universityUsers?: Maybe<Array<UniversityUser>>;
};

export type Scope = {
  __typename?: 'Scope';
  id: Scalars['ID'];
  name: Scalars['String'];
  roles?: Maybe<Array<Role>>;
};

export type Section = {
  __typename?: 'Section';
  activities?: Maybe<Array<Activity>>;
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  university: University;
  universityId: Scalars['String'];
};

export type SectionObject = {
  __typename?: 'SectionObject';
  activities: Array<BaseActivityInterface>;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  universityId: Scalars['String'];
};

export type University = {
  __typename?: 'University';
  activities?: Maybe<Array<Activity>>;
  assignments?: Maybe<Array<Assignment>>;
  colleges?: Maybe<Array<College>>;
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quizes?: Maybe<Array<Quiz>>;
  resources?: Maybe<Array<Resource>>;
  sections?: Maybe<Array<Section>>;
  universityUsers?: Maybe<Array<UniversityUser>>;
};

export type UniversityObject = {
  __typename?: 'UniversityObject';
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UniversityUser = {
  __typename?: 'UniversityUser';
  collegeUsers?: Maybe<Array<CollegeUser>>;
  id: Scalars['ID'];
  role: Role;
  roleId: Scalars['String'];
  university: University;
  universityId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UpdateAssignmentInput = {
  deadline: Scalars['DateTime'];
  description: Scalars['String'];
  filesToDelete: Array<Scalars['String']>;
  maxGrade: Scalars['Float'];
  name: Scalars['String'];
  oldFiles: Array<Scalars['String']>;
  sectionId: Scalars['String'];
};

export type UpdateMyAssignmentInput = {
  filesToDelete: Array<Scalars['String']>;
  oldFiles: Array<Scalars['String']>;
};

export type UpdateQuizInput = {
  description: Scalars['String'];
  filesToDelete: Array<Scalars['String']>;
  name: Scalars['String'];
  oldFiles: Array<Scalars['String']>;
  sectionId: Scalars['String'];
};

export type UpdateResourceInput = {
  description: Scalars['String'];
  filesToDelete: Array<Scalars['String']>;
  name: Scalars['String'];
  oldFiles: Array<Scalars['String']>;
  sectionId: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** First letter of the father's first name */
  fatherInitial: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  universityUsers?: Maybe<Array<UniversityUser>>;
  userAssignments?: Maybe<Array<UserAssignment>>;
};

export type UserAssignment = {
  __typename?: 'UserAssignment';
  assignment: Assignment;
  assignmentId: Scalars['String'];
  files?: Maybe<Array<Scalars['String']>>;
  grade?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type UserAssignmentObject = {
  __typename?: 'UserAssignmentObject';
  assignmentId: Scalars['String'];
  files?: Maybe<Array<Scalars['String']>>;
  grade?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: UserObject;
  userId: Scalars['String'];
};

export type UserObject = {
  __typename?: 'UserObject';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** First letter of the father's first name */
  fatherInitial: Scalars['String'];
  firstName: Scalars['String'];
  groupedByRoleUniversities: Array<GroupedByRoleUniversitiesObject>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type BaseUserAssignmentFieldsFragment = (
  { __typename?: 'UserAssignmentObject' }
  & Pick<UserAssignmentObject, 'id' | 'userId' | 'assignmentId' | 'grade' | 'files' | 'updatedAt'>
);

export type UpdateMyAssignmentMutationVariables = Exact<{
  id: Scalars['String'];
  data: UpdateMyAssignmentInput;
  newFiles: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UpdateMyAssignmentMutation = (
  { __typename?: 'Mutation' }
  & { updateMyAssignment: (
    { __typename?: 'UserAssignmentObject' }
    & BaseUserAssignmentFieldsFragment
  ) }
);

export type MyAssignmentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MyAssignmentQuery = (
  { __typename?: 'Query' }
  & { myAssignment?: Maybe<(
    { __typename?: 'UserAssignmentObject' }
    & BaseUserAssignmentFieldsFragment
  )> }
);

export type UserAssignmentsQueryVariables = Exact<{
  assignmentId: Scalars['String'];
}>;


export type UserAssignmentsQuery = (
  { __typename?: 'Query' }
  & { userAssignments: Array<(
    { __typename?: 'UserAssignmentObject' }
    & { user: (
      { __typename?: 'UserObject' }
      & BaseUserFieldsFragment
    ) }
    & BaseUserAssignmentFieldsFragment
  )> }
);

export type AuthenticationFieldsFragment = (
  { __typename?: 'Authentication' }
  & Pick<Authentication, 'accessToken'>
);

export type LoginMutationVariables = Exact<{
  user: LoginUserInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Authentication' }
    & AuthenticationFieldsFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout?: Maybe<(
    { __typename?: 'Authentication' }
    & AuthenticationFieldsFragment
  )> }
);

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = (
  { __typename?: 'Mutation' }
  & { refreshTokens: (
    { __typename?: 'Authentication' }
    & AuthenticationFieldsFragment
  ) }
);

export type RegisterMutationVariables = Exact<{
  user: RegisterUserInput;
  avatar?: Maybe<Scalars['Upload']>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Authentication' }
    & AuthenticationFieldsFragment
  ) }
);

export type CollegeFieldsFragment = (
  { __typename?: 'CollegeObject' }
  & Pick<CollegeObject, 'id' | 'name' | 'universityId'>
  & { courses: Array<(
    { __typename?: 'CourseObject' }
    & CourseFieldsFragment
  )> }
);

export type CreateCollegeMutationVariables = Exact<{
  data: CreateCollegeInput;
}>;


export type CreateCollegeMutation = (
  { __typename?: 'Mutation' }
  & { createCollege: (
    { __typename?: 'CollegeObject' }
    & CollegeFieldsFragment
  ) }
);

export type DeleteCollegeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCollegeMutation = (
  { __typename?: 'Mutation' }
  & { deleteCollege: (
    { __typename?: 'CollegeObject' }
    & CollegeFieldsFragment
  ) }
);

export type UpdateCollegeMutationVariables = Exact<{
  id: Scalars['String'];
  data: CreateCollegeInput;
}>;


export type UpdateCollegeMutation = (
  { __typename?: 'Mutation' }
  & { updateCollege: (
    { __typename?: 'CollegeObject' }
    & CollegeFieldsFragment
  ) }
);

export type CollegesQueryVariables = Exact<{
  universityId: Scalars['String'];
}>;


export type CollegesQuery = (
  { __typename?: 'Query' }
  & { colleges: Array<(
    { __typename?: 'CollegeObject' }
    & CollegeFieldsFragment
  )> }
);

type ActivityFields_AssignmentObject_Fragment = (
  { __typename?: 'AssignmentObject' }
  & Pick<AssignmentObject, 'deadline' | 'maxGrade'>
  & BaseActivityFields_AssignmentObject_Fragment
);

type ActivityFields_QuizObject_Fragment = (
  { __typename?: 'QuizObject' }
  & BaseActivityFields_QuizObject_Fragment
);

type ActivityFields_ResourceObject_Fragment = (
  { __typename?: 'ResourceObject' }
  & BaseActivityFields_ResourceObject_Fragment
);

export type ActivityFieldsFragment = ActivityFields_AssignmentObject_Fragment | ActivityFields_QuizObject_Fragment | ActivityFields_ResourceObject_Fragment;

type BaseActivityFields_AssignmentObject_Fragment = (
  { __typename?: 'AssignmentObject' }
  & Pick<AssignmentObject, 'id' | 'name' | 'sectionId' | 'universityId' | 'type' | 'description' | 'files' | 'createdAt'>
);

type BaseActivityFields_QuizObject_Fragment = (
  { __typename?: 'QuizObject' }
  & Pick<QuizObject, 'id' | 'name' | 'sectionId' | 'universityId' | 'type' | 'description' | 'files' | 'createdAt'>
);

type BaseActivityFields_ResourceObject_Fragment = (
  { __typename?: 'ResourceObject' }
  & Pick<ResourceObject, 'id' | 'name' | 'sectionId' | 'universityId' | 'type' | 'description' | 'files' | 'createdAt'>
);

export type BaseActivityFieldsFragment = BaseActivityFields_AssignmentObject_Fragment | BaseActivityFields_QuizObject_Fragment | BaseActivityFields_ResourceObject_Fragment;

export type CourseFieldsFragment = (
  { __typename?: 'CourseObject' }
  & Pick<CourseObject, 'id' | 'name' | 'collegeId' | 'universityId'>
);

export type SectionFieldsFragment = (
  { __typename?: 'SectionObject' }
  & Pick<SectionObject, 'id' | 'name' | 'universityId' | 'courseId' | 'createdAt'>
  & { activities: Array<(
    { __typename?: 'AssignmentObject' }
    & BaseActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & BaseActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & BaseActivityFields_ResourceObject_Fragment
  )> }
);

export type CreateAssignmentMutationVariables = Exact<{
  data: CreateAssignmentInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreateAssignmentMutation = (
  { __typename?: 'Mutation' }
  & { createAssignment: (
    { __typename?: 'AssignmentObject' }
    & BaseActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & BaseActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & BaseActivityFields_ResourceObject_Fragment
  ) }
);

export type CreateCourseMutationVariables = Exact<{
  data: CreateCourseInput;
}>;


export type CreateCourseMutation = (
  { __typename?: 'Mutation' }
  & { createCourse: (
    { __typename?: 'CourseObject' }
    & CourseFieldsFragment
  ) }
);

export type CreateQuizMutationVariables = Exact<{
  data: CreateQuizInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'AssignmentObject' }
    & BaseActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & BaseActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & BaseActivityFields_ResourceObject_Fragment
  ) }
);

export type CreateResourceMutationVariables = Exact<{
  data: CreateResourceInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreateResourceMutation = (
  { __typename?: 'Mutation' }
  & { createResource: (
    { __typename?: 'AssignmentObject' }
    & BaseActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & BaseActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & BaseActivityFields_ResourceObject_Fragment
  ) }
);

export type CreateSectionMutationVariables = Exact<{
  data: CreateSectionInput;
}>;


export type CreateSectionMutation = (
  { __typename?: 'Mutation' }
  & { createSection: (
    { __typename?: 'SectionObject' }
    & SectionFieldsFragment
  ) }
);

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['String'];
  type: ActivityType;
}>;


export type DeleteActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteActivity: (
    { __typename?: 'AssignmentObject' }
    & BaseActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & BaseActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & BaseActivityFields_ResourceObject_Fragment
  ) }
);

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCourseMutation = (
  { __typename?: 'Mutation' }
  & { deleteCourse: (
    { __typename?: 'CourseObject' }
    & CourseFieldsFragment
  ) }
);

export type DeleteSectionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSectionMutation = (
  { __typename?: 'Mutation' }
  & { deleteSection: (
    { __typename?: 'SectionObject' }
    & SectionFieldsFragment
  ) }
);

export type UpdateAssignmentMutationVariables = Exact<{
  id: Scalars['String'];
  data: UpdateAssignmentInput;
  newFiles: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UpdateAssignmentMutation = (
  { __typename?: 'Mutation' }
  & { updateAssignment: (
    { __typename?: 'AssignmentObject' }
    & ActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & ActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & ActivityFields_ResourceObject_Fragment
  ) }
);

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['String'];
  data: CreateCourseInput;
}>;


export type UpdateCourseMutation = (
  { __typename?: 'Mutation' }
  & { updateCourse: (
    { __typename?: 'CourseObject' }
    & CourseFieldsFragment
  ) }
);

export type UpdateQuizMutationVariables = Exact<{
  id: Scalars['String'];
  data: UpdateQuizInput;
  newFiles: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UpdateQuizMutation = (
  { __typename?: 'Mutation' }
  & { updateQuiz: (
    { __typename?: 'AssignmentObject' }
    & ActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & ActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & ActivityFields_ResourceObject_Fragment
  ) }
);

export type UpdateResourceMutationVariables = Exact<{
  id: Scalars['String'];
  data: UpdateResourceInput;
  newFiles: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UpdateResourceMutation = (
  { __typename?: 'Mutation' }
  & { updateResource: (
    { __typename?: 'AssignmentObject' }
    & ActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & ActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & ActivityFields_ResourceObject_Fragment
  ) }
);

export type UpdateSectionMutationVariables = Exact<{
  id: Scalars['String'];
  data: CreateSectionInput;
}>;


export type UpdateSectionMutation = (
  { __typename?: 'Mutation' }
  & { updateSection: (
    { __typename?: 'SectionObject' }
    & SectionFieldsFragment
  ) }
);

export type ActivityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ActivityQuery = (
  { __typename?: 'Query' }
  & { activity: (
    { __typename?: 'AssignmentObject' }
    & ActivityFields_AssignmentObject_Fragment
  ) | (
    { __typename?: 'QuizObject' }
    & ActivityFields_QuizObject_Fragment
  ) | (
    { __typename?: 'ResourceObject' }
    & ActivityFields_ResourceObject_Fragment
  ) }
);

export type SectionsQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type SectionsQuery = (
  { __typename?: 'Query' }
  & { sections: Array<(
    { __typename?: 'SectionObject' }
    & SectionFieldsFragment
  )> }
);

export type UniversityFieldsFragment = (
  { __typename?: 'UniversityObject' }
  & Pick<UniversityObject, 'id' | 'name' | 'logo'>
);

export type CreateUniversityMutationVariables = Exact<{
  data: CreateUniversityInput;
  logo?: Maybe<Scalars['Upload']>;
}>;


export type CreateUniversityMutation = (
  { __typename?: 'Mutation' }
  & { createUniversity: (
    { __typename?: 'UniversityObject' }
    & UniversityFieldsFragment
  ) }
);

export type UpdateUniversityMutationVariables = Exact<{
  id: Scalars['String'];
  data: CreateUniversityInput;
  logo?: Maybe<Scalars['Upload']>;
}>;


export type UpdateUniversityMutation = (
  { __typename?: 'Mutation' }
  & { updateUniversity: (
    { __typename?: 'UniversityObject' }
    & UniversityFieldsFragment
  ) }
);

export type BaseUserFieldsFragment = (
  { __typename?: 'UserObject' }
  & Pick<UserObject, 'id' | 'email' | 'fatherInitial' | 'firstName' | 'lastName' | 'avatar'>
);

export type DeleteUniversityMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUniversityMutation = (
  { __typename?: 'Mutation' }
  & { deleteUniversity: (
    { __typename?: 'UniversityObject' }
    & UniversityFieldsFragment
  ) }
);

export type LeaveUniversityMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LeaveUniversityMutation = (
  { __typename?: 'Mutation' }
  & { leaveUniversity: (
    { __typename?: 'UniversityObject' }
    & UniversityFieldsFragment
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserObject' }
    & { groupedByRoleUniversities: Array<(
      { __typename?: 'GroupedByRoleUniversitiesObject' }
      & Pick<GroupedByRoleUniversitiesObject, 'role'>
      & { universities: Array<(
        { __typename?: 'UniversityObject' }
        & UniversityFieldsFragment
      )> }
    )> }
    & BaseUserFieldsFragment
  ) }
);

export const BaseUserAssignmentFieldsFragmentDoc = gql`
    fragment BaseUserAssignmentFields on UserAssignmentObject {
  id
  userId
  assignmentId
  grade
  files
  updatedAt
}
    `;
export const AuthenticationFieldsFragmentDoc = gql`
    fragment AuthenticationFields on Authentication {
  accessToken
}
    `;
export const CourseFieldsFragmentDoc = gql`
    fragment CourseFields on CourseObject {
  id
  name
  collegeId
  universityId
}
    `;
export const CollegeFieldsFragmentDoc = gql`
    fragment CollegeFields on CollegeObject {
  id
  name
  universityId
  courses {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;
export const BaseActivityFieldsFragmentDoc = gql`
    fragment BaseActivityFields on BaseActivityInterface {
  id
  name
  sectionId
  universityId
  type
  description
  files
  createdAt
}
    `;
export const ActivityFieldsFragmentDoc = gql`
    fragment ActivityFields on BaseActivityInterface {
  ...BaseActivityFields
  ... on AssignmentObject {
    deadline
    maxGrade
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export const SectionFieldsFragmentDoc = gql`
    fragment SectionFields on SectionObject {
  id
  name
  universityId
  courseId
  createdAt
  activities {
    ...BaseActivityFields
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export const UniversityFieldsFragmentDoc = gql`
    fragment UniversityFields on UniversityObject {
  id
  name
  logo
}
    `;
export const BaseUserFieldsFragmentDoc = gql`
    fragment BaseUserFields on UserObject {
  id
  email
  fatherInitial
  firstName
  lastName
  avatar
}
    `;
export const UpdateMyAssignmentDocument = gql`
    mutation UpdateMyAssignment($id: String!, $data: UpdateMyAssignmentInput!, $newFiles: [Upload!]!) {
  updateMyAssignment(id: $id, data: $data, newFiles: $newFiles) {
    ...BaseUserAssignmentFields
  }
}
    ${BaseUserAssignmentFieldsFragmentDoc}`;
export type UpdateMyAssignmentMutationFn = Apollo.MutationFunction<UpdateMyAssignmentMutation, UpdateMyAssignmentMutationVariables>;

/**
 * __useUpdateMyAssignmentMutation__
 *
 * To run a mutation, you first call `useUpdateMyAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyAssignmentMutation, { data, loading, error }] = useUpdateMyAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      newFiles: // value for 'newFiles'
 *   },
 * });
 */
export function useUpdateMyAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyAssignmentMutation, UpdateMyAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyAssignmentMutation, UpdateMyAssignmentMutationVariables>(UpdateMyAssignmentDocument, options);
      }
export type UpdateMyAssignmentMutationHookResult = ReturnType<typeof useUpdateMyAssignmentMutation>;
export type UpdateMyAssignmentMutationResult = Apollo.MutationResult<UpdateMyAssignmentMutation>;
export type UpdateMyAssignmentMutationOptions = Apollo.BaseMutationOptions<UpdateMyAssignmentMutation, UpdateMyAssignmentMutationVariables>;
export const MyAssignmentDocument = gql`
    query MyAssignment($id: String!) {
  myAssignment(id: $id) {
    ...BaseUserAssignmentFields
  }
}
    ${BaseUserAssignmentFieldsFragmentDoc}`;

/**
 * __useMyAssignmentQuery__
 *
 * To run a query within a React component, call `useMyAssignmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyAssignmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyAssignmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMyAssignmentQuery(baseOptions: Apollo.QueryHookOptions<MyAssignmentQuery, MyAssignmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyAssignmentQuery, MyAssignmentQueryVariables>(MyAssignmentDocument, options);
      }
export function useMyAssignmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyAssignmentQuery, MyAssignmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyAssignmentQuery, MyAssignmentQueryVariables>(MyAssignmentDocument, options);
        }
export type MyAssignmentQueryHookResult = ReturnType<typeof useMyAssignmentQuery>;
export type MyAssignmentLazyQueryHookResult = ReturnType<typeof useMyAssignmentLazyQuery>;
export type MyAssignmentQueryResult = Apollo.QueryResult<MyAssignmentQuery, MyAssignmentQueryVariables>;
export const UserAssignmentsDocument = gql`
    query UserAssignments($assignmentId: String!) {
  userAssignments(assignmentId: $assignmentId) {
    ...BaseUserAssignmentFields
    user {
      ...BaseUserFields
    }
  }
}
    ${BaseUserAssignmentFieldsFragmentDoc}
${BaseUserFieldsFragmentDoc}`;

/**
 * __useUserAssignmentsQuery__
 *
 * To run a query within a React component, call `useUserAssignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAssignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAssignmentsQuery({
 *   variables: {
 *      assignmentId: // value for 'assignmentId'
 *   },
 * });
 */
export function useUserAssignmentsQuery(baseOptions: Apollo.QueryHookOptions<UserAssignmentsQuery, UserAssignmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAssignmentsQuery, UserAssignmentsQueryVariables>(UserAssignmentsDocument, options);
      }
export function useUserAssignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAssignmentsQuery, UserAssignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAssignmentsQuery, UserAssignmentsQueryVariables>(UserAssignmentsDocument, options);
        }
export type UserAssignmentsQueryHookResult = ReturnType<typeof useUserAssignmentsQuery>;
export type UserAssignmentsLazyQueryHookResult = ReturnType<typeof useUserAssignmentsLazyQuery>;
export type UserAssignmentsQueryResult = Apollo.QueryResult<UserAssignmentsQuery, UserAssignmentsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($user: LoginUserInput!) {
  login(user: $user) {
    ...AuthenticationFields
  }
}
    ${AuthenticationFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    ...AuthenticationFields
  }
}
    ${AuthenticationFieldsFragmentDoc}`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    ...AuthenticationFields
  }
}
    ${AuthenticationFieldsFragmentDoc}`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($user: RegisterUserInput!, $avatar: Upload) {
  register(user: $user, avatar: $avatar) {
    ...AuthenticationFields
  }
}
    ${AuthenticationFieldsFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateCollegeDocument = gql`
    mutation CreateCollege($data: CreateCollegeInput!) {
  createCollege(data: $data) {
    ...CollegeFields
  }
}
    ${CollegeFieldsFragmentDoc}`;
export type CreateCollegeMutationFn = Apollo.MutationFunction<CreateCollegeMutation, CreateCollegeMutationVariables>;

/**
 * __useCreateCollegeMutation__
 *
 * To run a mutation, you first call `useCreateCollegeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollegeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollegeMutation, { data, loading, error }] = useCreateCollegeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCollegeMutation(baseOptions?: Apollo.MutationHookOptions<CreateCollegeMutation, CreateCollegeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCollegeMutation, CreateCollegeMutationVariables>(CreateCollegeDocument, options);
      }
export type CreateCollegeMutationHookResult = ReturnType<typeof useCreateCollegeMutation>;
export type CreateCollegeMutationResult = Apollo.MutationResult<CreateCollegeMutation>;
export type CreateCollegeMutationOptions = Apollo.BaseMutationOptions<CreateCollegeMutation, CreateCollegeMutationVariables>;
export const DeleteCollegeDocument = gql`
    mutation DeleteCollege($id: String!) {
  deleteCollege(id: $id) {
    ...CollegeFields
  }
}
    ${CollegeFieldsFragmentDoc}`;
export type DeleteCollegeMutationFn = Apollo.MutationFunction<DeleteCollegeMutation, DeleteCollegeMutationVariables>;

/**
 * __useDeleteCollegeMutation__
 *
 * To run a mutation, you first call `useDeleteCollegeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollegeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollegeMutation, { data, loading, error }] = useDeleteCollegeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollegeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCollegeMutation, DeleteCollegeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCollegeMutation, DeleteCollegeMutationVariables>(DeleteCollegeDocument, options);
      }
export type DeleteCollegeMutationHookResult = ReturnType<typeof useDeleteCollegeMutation>;
export type DeleteCollegeMutationResult = Apollo.MutationResult<DeleteCollegeMutation>;
export type DeleteCollegeMutationOptions = Apollo.BaseMutationOptions<DeleteCollegeMutation, DeleteCollegeMutationVariables>;
export const UpdateCollegeDocument = gql`
    mutation UpdateCollege($id: String!, $data: CreateCollegeInput!) {
  updateCollege(id: $id, data: $data) {
    ...CollegeFields
  }
}
    ${CollegeFieldsFragmentDoc}`;
export type UpdateCollegeMutationFn = Apollo.MutationFunction<UpdateCollegeMutation, UpdateCollegeMutationVariables>;

/**
 * __useUpdateCollegeMutation__
 *
 * To run a mutation, you first call `useUpdateCollegeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollegeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollegeMutation, { data, loading, error }] = useUpdateCollegeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCollegeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCollegeMutation, UpdateCollegeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCollegeMutation, UpdateCollegeMutationVariables>(UpdateCollegeDocument, options);
      }
export type UpdateCollegeMutationHookResult = ReturnType<typeof useUpdateCollegeMutation>;
export type UpdateCollegeMutationResult = Apollo.MutationResult<UpdateCollegeMutation>;
export type UpdateCollegeMutationOptions = Apollo.BaseMutationOptions<UpdateCollegeMutation, UpdateCollegeMutationVariables>;
export const CollegesDocument = gql`
    query Colleges($universityId: String!) {
  colleges(universityId: $universityId) {
    ...CollegeFields
  }
}
    ${CollegeFieldsFragmentDoc}`;

/**
 * __useCollegesQuery__
 *
 * To run a query within a React component, call `useCollegesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollegesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollegesQuery({
 *   variables: {
 *      universityId: // value for 'universityId'
 *   },
 * });
 */
export function useCollegesQuery(baseOptions: Apollo.QueryHookOptions<CollegesQuery, CollegesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollegesQuery, CollegesQueryVariables>(CollegesDocument, options);
      }
export function useCollegesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollegesQuery, CollegesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollegesQuery, CollegesQueryVariables>(CollegesDocument, options);
        }
export type CollegesQueryHookResult = ReturnType<typeof useCollegesQuery>;
export type CollegesLazyQueryHookResult = ReturnType<typeof useCollegesLazyQuery>;
export type CollegesQueryResult = Apollo.QueryResult<CollegesQuery, CollegesQueryVariables>;
export const CreateAssignmentDocument = gql`
    mutation CreateAssignment($data: CreateAssignmentInput!, $files: [Upload!]!) {
  createAssignment(data: $data, files: $files) {
    ...BaseActivityFields
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export type CreateAssignmentMutationFn = Apollo.MutationFunction<CreateAssignmentMutation, CreateAssignmentMutationVariables>;

/**
 * __useCreateAssignmentMutation__
 *
 * To run a mutation, you first call `useCreateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignmentMutation, { data, loading, error }] = useCreateAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssignmentMutation, CreateAssignmentMutationVariables>(CreateAssignmentDocument, options);
      }
export type CreateAssignmentMutationHookResult = ReturnType<typeof useCreateAssignmentMutation>;
export type CreateAssignmentMutationResult = Apollo.MutationResult<CreateAssignmentMutation>;
export type CreateAssignmentMutationOptions = Apollo.BaseMutationOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export const CreateCourseDocument = gql`
    mutation CreateCourse($data: CreateCourseInput!) {
  createCourse(data: $data) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($data: CreateQuizInput!, $files: [Upload!]!) {
  createQuiz(data: $data, files: $files) {
    ...BaseActivityFields
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      data: // value for 'data'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const CreateResourceDocument = gql`
    mutation CreateResource($data: CreateResourceInput!, $files: [Upload!]!) {
  createResource(data: $data, files: $files) {
    ...BaseActivityFields
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export type CreateResourceMutationFn = Apollo.MutationFunction<CreateResourceMutation, CreateResourceMutationVariables>;

/**
 * __useCreateResourceMutation__
 *
 * To run a mutation, you first call `useCreateResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResourceMutation, { data, loading, error }] = useCreateResourceMutation({
 *   variables: {
 *      data: // value for 'data'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateResourceMutation(baseOptions?: Apollo.MutationHookOptions<CreateResourceMutation, CreateResourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateResourceMutation, CreateResourceMutationVariables>(CreateResourceDocument, options);
      }
export type CreateResourceMutationHookResult = ReturnType<typeof useCreateResourceMutation>;
export type CreateResourceMutationResult = Apollo.MutationResult<CreateResourceMutation>;
export type CreateResourceMutationOptions = Apollo.BaseMutationOptions<CreateResourceMutation, CreateResourceMutationVariables>;
export const CreateSectionDocument = gql`
    mutation CreateSection($data: CreateSectionInput!) {
  createSection(data: $data) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}`;
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
      }
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<CreateSectionMutation, CreateSectionMutationVariables>;
export const DeleteActivityDocument = gql`
    mutation DeleteActivity($id: String!, $type: ActivityType!) {
  deleteActivity(id: $id, type: $type) {
    ...BaseActivityFields
  }
}
    ${BaseActivityFieldsFragmentDoc}`;
export type DeleteActivityMutationFn = Apollo.MutationFunction<DeleteActivityMutation, DeleteActivityMutationVariables>;

/**
 * __useDeleteActivityMutation__
 *
 * To run a mutation, you first call `useDeleteActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActivityMutation, { data, loading, error }] = useDeleteActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useDeleteActivityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActivityMutation, DeleteActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteActivityMutation, DeleteActivityMutationVariables>(DeleteActivityDocument, options);
      }
export type DeleteActivityMutationHookResult = ReturnType<typeof useDeleteActivityMutation>;
export type DeleteActivityMutationResult = Apollo.MutationResult<DeleteActivityMutation>;
export type DeleteActivityMutationOptions = Apollo.BaseMutationOptions<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation DeleteCourse($id: String!) {
  deleteCourse(id: $id) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const DeleteSectionDocument = gql`
    mutation DeleteSection($id: String!) {
  deleteSection(id: $id) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}`;
export type DeleteSectionMutationFn = Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>;

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSectionMutation, DeleteSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSectionMutation, DeleteSectionMutationVariables>(DeleteSectionDocument, options);
      }
export type DeleteSectionMutationHookResult = ReturnType<typeof useDeleteSectionMutation>;
export type DeleteSectionMutationResult = Apollo.MutationResult<DeleteSectionMutation>;
export type DeleteSectionMutationOptions = Apollo.BaseMutationOptions<DeleteSectionMutation, DeleteSectionMutationVariables>;
export const UpdateAssignmentDocument = gql`
    mutation UpdateAssignment($id: String!, $data: UpdateAssignmentInput!, $newFiles: [Upload!]!) {
  updateAssignment(id: $id, data: $data, newFiles: $newFiles) {
    ...ActivityFields
  }
}
    ${ActivityFieldsFragmentDoc}`;
export type UpdateAssignmentMutationFn = Apollo.MutationFunction<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;

/**
 * __useUpdateAssignmentMutation__
 *
 * To run a mutation, you first call `useUpdateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignmentMutation, { data, loading, error }] = useUpdateAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      newFiles: // value for 'newFiles'
 *   },
 * });
 */
export function useUpdateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>(UpdateAssignmentDocument, options);
      }
export type UpdateAssignmentMutationHookResult = ReturnType<typeof useUpdateAssignmentMutation>;
export type UpdateAssignmentMutationResult = Apollo.MutationResult<UpdateAssignmentMutation>;
export type UpdateAssignmentMutationOptions = Apollo.BaseMutationOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation UpdateCourse($id: String!, $data: CreateCourseInput!) {
  updateCourse(id: $id, data: $data) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($id: String!, $data: UpdateQuizInput!, $newFiles: [Upload!]!) {
  updateQuiz(id: $id, data: $data, newFiles: $newFiles) {
    ...ActivityFields
  }
}
    ${ActivityFieldsFragmentDoc}`;
export type UpdateQuizMutationFn = Apollo.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      newFiles: // value for 'newFiles'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, options);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const UpdateResourceDocument = gql`
    mutation UpdateResource($id: String!, $data: UpdateResourceInput!, $newFiles: [Upload!]!) {
  updateResource(id: $id, data: $data, newFiles: $newFiles) {
    ...ActivityFields
  }
}
    ${ActivityFieldsFragmentDoc}`;
export type UpdateResourceMutationFn = Apollo.MutationFunction<UpdateResourceMutation, UpdateResourceMutationVariables>;

/**
 * __useUpdateResourceMutation__
 *
 * To run a mutation, you first call `useUpdateResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResourceMutation, { data, loading, error }] = useUpdateResourceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      newFiles: // value for 'newFiles'
 *   },
 * });
 */
export function useUpdateResourceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResourceMutation, UpdateResourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResourceMutation, UpdateResourceMutationVariables>(UpdateResourceDocument, options);
      }
export type UpdateResourceMutationHookResult = ReturnType<typeof useUpdateResourceMutation>;
export type UpdateResourceMutationResult = Apollo.MutationResult<UpdateResourceMutation>;
export type UpdateResourceMutationOptions = Apollo.BaseMutationOptions<UpdateResourceMutation, UpdateResourceMutationVariables>;
export const UpdateSectionDocument = gql`
    mutation UpdateSection($id: String!, $data: CreateSectionInput!) {
  updateSection(id: $id, data: $data) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}`;
export type UpdateSectionMutationFn = Apollo.MutationFunction<UpdateSectionMutation, UpdateSectionMutationVariables>;

/**
 * __useUpdateSectionMutation__
 *
 * To run a mutation, you first call `useUpdateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionMutation, { data, loading, error }] = useUpdateSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSectionMutation, UpdateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSectionMutation, UpdateSectionMutationVariables>(UpdateSectionDocument, options);
      }
export type UpdateSectionMutationHookResult = ReturnType<typeof useUpdateSectionMutation>;
export type UpdateSectionMutationResult = Apollo.MutationResult<UpdateSectionMutation>;
export type UpdateSectionMutationOptions = Apollo.BaseMutationOptions<UpdateSectionMutation, UpdateSectionMutationVariables>;
export const ActivityDocument = gql`
    query Activity($id: String!) {
  activity(id: $id) {
    ...ActivityFields
  }
}
    ${ActivityFieldsFragmentDoc}`;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivityQuery(baseOptions: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options);
      }
export function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = Apollo.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const SectionsDocument = gql`
    query Sections($courseId: String!) {
  sections(courseId: $courseId) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}`;

/**
 * __useSectionsQuery__
 *
 * To run a query within a React component, call `useSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useSectionsQuery(baseOptions: Apollo.QueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options);
      }
export function useSectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options);
        }
export type SectionsQueryHookResult = ReturnType<typeof useSectionsQuery>;
export type SectionsLazyQueryHookResult = ReturnType<typeof useSectionsLazyQuery>;
export type SectionsQueryResult = Apollo.QueryResult<SectionsQuery, SectionsQueryVariables>;
export const CreateUniversityDocument = gql`
    mutation CreateUniversity($data: CreateUniversityInput!, $logo: Upload) {
  createUniversity(data: $data, logo: $logo) {
    ...UniversityFields
  }
}
    ${UniversityFieldsFragmentDoc}`;
export type CreateUniversityMutationFn = Apollo.MutationFunction<CreateUniversityMutation, CreateUniversityMutationVariables>;

/**
 * __useCreateUniversityMutation__
 *
 * To run a mutation, you first call `useCreateUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUniversityMutation, { data, loading, error }] = useCreateUniversityMutation({
 *   variables: {
 *      data: // value for 'data'
 *      logo: // value for 'logo'
 *   },
 * });
 */
export function useCreateUniversityMutation(baseOptions?: Apollo.MutationHookOptions<CreateUniversityMutation, CreateUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUniversityMutation, CreateUniversityMutationVariables>(CreateUniversityDocument, options);
      }
export type CreateUniversityMutationHookResult = ReturnType<typeof useCreateUniversityMutation>;
export type CreateUniversityMutationResult = Apollo.MutationResult<CreateUniversityMutation>;
export type CreateUniversityMutationOptions = Apollo.BaseMutationOptions<CreateUniversityMutation, CreateUniversityMutationVariables>;
export const UpdateUniversityDocument = gql`
    mutation UpdateUniversity($id: String!, $data: CreateUniversityInput!, $logo: Upload) {
  updateUniversity(id: $id, data: $data, logo: $logo) {
    ...UniversityFields
  }
}
    ${UniversityFieldsFragmentDoc}`;
export type UpdateUniversityMutationFn = Apollo.MutationFunction<UpdateUniversityMutation, UpdateUniversityMutationVariables>;

/**
 * __useUpdateUniversityMutation__
 *
 * To run a mutation, you first call `useUpdateUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUniversityMutation, { data, loading, error }] = useUpdateUniversityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      logo: // value for 'logo'
 *   },
 * });
 */
export function useUpdateUniversityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUniversityMutation, UpdateUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUniversityMutation, UpdateUniversityMutationVariables>(UpdateUniversityDocument, options);
      }
export type UpdateUniversityMutationHookResult = ReturnType<typeof useUpdateUniversityMutation>;
export type UpdateUniversityMutationResult = Apollo.MutationResult<UpdateUniversityMutation>;
export type UpdateUniversityMutationOptions = Apollo.BaseMutationOptions<UpdateUniversityMutation, UpdateUniversityMutationVariables>;
export const DeleteUniversityDocument = gql`
    mutation DeleteUniversity($id: String!) {
  deleteUniversity(id: $id) {
    ...UniversityFields
  }
}
    ${UniversityFieldsFragmentDoc}`;
export type DeleteUniversityMutationFn = Apollo.MutationFunction<DeleteUniversityMutation, DeleteUniversityMutationVariables>;

/**
 * __useDeleteUniversityMutation__
 *
 * To run a mutation, you first call `useDeleteUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUniversityMutation, { data, loading, error }] = useDeleteUniversityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUniversityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUniversityMutation, DeleteUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUniversityMutation, DeleteUniversityMutationVariables>(DeleteUniversityDocument, options);
      }
export type DeleteUniversityMutationHookResult = ReturnType<typeof useDeleteUniversityMutation>;
export type DeleteUniversityMutationResult = Apollo.MutationResult<DeleteUniversityMutation>;
export type DeleteUniversityMutationOptions = Apollo.BaseMutationOptions<DeleteUniversityMutation, DeleteUniversityMutationVariables>;
export const LeaveUniversityDocument = gql`
    mutation LeaveUniversity($id: String!) {
  leaveUniversity(id: $id) {
    ...UniversityFields
  }
}
    ${UniversityFieldsFragmentDoc}`;
export type LeaveUniversityMutationFn = Apollo.MutationFunction<LeaveUniversityMutation, LeaveUniversityMutationVariables>;

/**
 * __useLeaveUniversityMutation__
 *
 * To run a mutation, you first call `useLeaveUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveUniversityMutation, { data, loading, error }] = useLeaveUniversityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLeaveUniversityMutation(baseOptions?: Apollo.MutationHookOptions<LeaveUniversityMutation, LeaveUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveUniversityMutation, LeaveUniversityMutationVariables>(LeaveUniversityDocument, options);
      }
export type LeaveUniversityMutationHookResult = ReturnType<typeof useLeaveUniversityMutation>;
export type LeaveUniversityMutationResult = Apollo.MutationResult<LeaveUniversityMutation>;
export type LeaveUniversityMutationOptions = Apollo.BaseMutationOptions<LeaveUniversityMutation, LeaveUniversityMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUserFields
    groupedByRoleUniversities {
      role
      universities {
        ...UniversityFields
      }
    }
  }
}
    ${BaseUserFieldsFragmentDoc}
${UniversityFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;