export default [
    {
      label: 'Name',
      value: 'name',
      placeholder: 'E.g. full_name'
    },
    {
      label: 'Email',
      value: 'email',
      placeholder: 'E.g. email'
    },
    {
      label: 'Password',
      value: 'password',
      placeholder: 'E.g. password'
    },
    {
      label: 'Phone',
      value: 'phone',
      placeholder: 'E.g. phoneNo'
    },
    {
      label: 'Date',
      value: 'date',
      placeholder: 'E.g. dob'
    },
    {
      label: 'Short Text',
      value: 'string',
      placeholder: 'E.g. genre'
    },
    {
      label: 'Long Text',
      value: 'long text',
      placeholder: 'E.g. description'
    },
    {
      label: 'Number',
      value: 'number',
      placeholder: 'E.g. rating'
    },
    {
      label: 'Image',
      value: 'image',
      placeholder: 'E.g. profile_picture',
      options: {
        face: {
          label: "Is a picture of person",
          type: Boolean,
          defaultValue: false
        }
      }
    },
    {
      label: 'Video',
      value: 'video',
      placeholder: 'E.g. youtube_url'
    },
    {
      label: 'File',
      value: 'file',
      placeholder: 'E.g. attachment'
    },
    {
      label: 'Link',
      value: 'link',
      placeholder: 'E.g. rsvp_link'
    },
    {
      label: 'Location',
      value: 'location',
      placeholder: 'E.g. location'
    },
    {
      label: 'Switch',
      value: 'boolean',
      placeholder: 'E.g. in_stock'
    },
    {
      label: 'Rating',
      value: 'rating',
      placeholder: 'E.g. rating',
      options: {
        outOf: {
          label: "Rating out of",
          type: "choice",
          choices: ["5", "10"],
          defaultValue: "5"
        }
      }
    }
];