export interface Task {
    taskId: number;
    title: string | null;
    description: string | null | undefined;
    priority: string | null | undefined;
    // deadline: Date;
    attachLink: {
      link: string,
      shortLink: string
    }
    imageUrl: string|null|undefined;
  }