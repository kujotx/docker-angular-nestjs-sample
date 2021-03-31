function Test-Command {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $CommandName
    )
    return (Get-Command $CommandName -ErrorAction Ignore)
}



# install chocolatey
if (-not (Test-Command "choco")) {
    Write-Host "Installing Chocolatey"
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))    
}


# install Docker Desktop
if (-not (Test-Command "choco")) {
    Write-Host "Installing Docker Desktop"
    choco install docker-desktop -y
}

# install Node JS
if (-not (Test-Command "npm")) {
    Write-Host "Installing Node JS LTS"
    choco install nodejs-lts -y
}

# Install db-migrate, Angular and NestJS CLIs using NPM.
if (-not (Test-Command "db-migrate")) {
    Write-Host "Installing db-migrate"
    npm install -g db-migrate
}

if (-not (Test-Command "ng")) {
    Write-Host "Installing @angular/cli globally"
    npm install -g @angular/cli
}

if (-not (Test-Command "nest")) {
    Write-Host "Installing @nestjs/cli globally"
    npm install -g @angular/cli
}

Write-Host "Machine configured"