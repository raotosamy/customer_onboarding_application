import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'file-upload',
  imports: [CommonModule, MatFormFieldModule, MatIconModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
 previews: { name: string; type: string; previewUrl?: string }[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.previews = [];

    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();

      // Store the file name and type
      const fileData = { name: file.name, type: file.type };

      // Create a preview URL for images
      if (file.type.startsWith('image/')) {
        reader.onload = () => {
          this.previews.push({ ...fileData, previewUrl: reader.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        // Non-image files don't get a preview
        this.previews.push(fileData);
      }
    });
  }



  selectedFile: File | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      console.log('File to upload:', this.selectedFile.name);
      // You can perform your upload logic here (e.g., send the file to a backend API)
    } else {
      console.log('No file selected');
    }
  }
}
