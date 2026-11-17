# Profile Architecture

## Author

Lukas Steer

## Profile Hook

useProfile.ts

### What does the hook do?

The hook manages all React state logic for the profile page including profile info, favorite books, currently reading list, comment draft,
as well as loading and error flags. It loads the page when once mounted (database implementation next sprint), right now i just have a fake 2 seconding loading screen.

### How did i decide what logic to include in the hook?

Everything that depends on React went into my hook. We are just calling the service and storing results in state.

### Where is this hook made use of in the project and how?

Used in Profile.tsx. The component calls useProfile(), renders, and passes user actions like submitting or deleting a comment back to the hook.

## Profile Service

profileService.ts

### What does the service do?

Services holds all business logic so I implemented that for my profile service. loadProfile fetches the profile, both book lists, and the comments from the repository,
sorts the comments newest first and converts each comment into a display ready CommentView with a formatted date, addComment trims the text. deleteComment passes the delete request through to the repository.

### How did i decide what logic to include in the service?

All validation, sorting, and formatting. This allows for a nice neat place for all business logic to exist without touching React or the future database

### Where is this service made use of in the project and how?

Used in useProfile.ts. The hook calls profileService.loadProfile() on mount, profileService.addComment(draft) when a comment is posted, and
profileService.deleteComment(id) when one is deleted.

## Profile Repository

profileRepository.ts

### What does the repository do?

The repository is our data access layer. It returns profile info and books lists from the mock data file profileMockData.ts. In next sprint this mock data will be replaced with a real database. Methods are included to get all profile data. Incrementing ID and ISO timestamp for created comments.

### How did i decide what logic to include in the repository?

The repository is where all data access takes place so all of my methods are async and return copies of the data (mock data for now). Through my repository my profile page behaves as if it were interacting with a real backend, except my few examples of mock data are fetched instantly. Mock data and local arrays will be replaced with real API calls.

### Where is this repository made use of in the project and how?

It is used in profileService.ts. The service calls profileRepository.getProfile(), getFavoriteBooks(), getCurrentlyReading(), and getComments() inside loadProfile
and addComment and deleteComment when comments are created or deleted.
