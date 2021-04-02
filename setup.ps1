function Test-Command {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $CommandName
    )
    return (Get-Command $CommandName -ErrorAction Ignore)
}

function Test-NpmPackage {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $PackageName
    )

    $result = (npm list -g $PackageName --depth 0 | findstr $PackageName)

    if ($result) {
        return $true
    }

    return $false
}

$configured = $true

Write-Host "Checking for required software to run AdoptAHighway" -ForegroundColor Cyan

# install Node JS
if (-not (Test-Command "npm")) {
    $configured = $false
    Write-Host "Node JS LTS needs to be installed" -ForegroundColor Yellow
}

# Install Node Packages
if (-not (Test-Command "db-migrate")) {
    $configured = $false
    Write-Host "db-migrate needs to be installed from NPM" -ForegroundColor Yellow
}

if (-not (Test-NpmPackage "db-migrate-mssql")) {
    $configured = $false
    Write-Host "db-migrate-mssql needs to be installed from NPM" -ForegroundColor Yellow
}

if (-not (Test-NpmPackage "jshint")) {
    $configured = $false
    Write-Host "jshint needs to be installed from NPM" -ForegroundColor Yellow
}

if (-not (Test-Command "typeorm")) {
    $configured = $false
    Write-Host "typeorm needs to be installed from NPM" -ForegroundColor Yellow
}

if (-not (Test-Command "ng")) {
    $configured = $false
    Write-Host "@angular/cli needs to be installed from NPM" -ForegroundColor Yellow
}

if (-not (Test-Command "nest")) {
    $configured = $false
    Write-Host "@nestjs/cli needs to be installed from NPM" -ForegroundColor Yellow
}

if ($configured) {
    Write-Host "This machine configured successfully to run Adopt-A-Highway" -ForegroundColor Green    
} else {
    Write-Host "This machine is not configured to run Adopt-A-Highway" -ForegroundColor Red   
}
