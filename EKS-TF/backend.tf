terraform {
  backend "s3" {
    bucket         = "yt-clone-s3"
    region         = "us-east-1"
    key            = "Youtube-clone-app/EKS-TF/terraform.tfstate"
    dynamodb_table = "Lock-Files"
    encrypt        = true
  }
  required_version = ">=0.13.0"
  required_providers {
    aws = {
      version = ">= 6.0"
      source  = "hashicorp/aws"
    }
  }
}
