
export interface Workbench {
  id: string;
  name: string;
  description?: string;
  createdAt: string; // Using string for date representation in data
  snippetCount?: number;
}

export interface Snippet {
  id: string;
  workbenchId: string;
  type: 'text' | 'image' | 'link';
  content: string; // For text/link type, content is the text/URL. For image type, content is the image URL.
  sourceUrl: string; // The URL the snippet was captured from
  capturedAt: string; // Using string for date representation in data
}
